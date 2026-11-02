const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright')
const assert=require('node:assert/strict')
const fs=require('node:fs/promises')
function luminance(rgb){return rgb.slice(0,3).map(x=>{const c=x/255;return c<=0.04045?c/12.92:((c+0.055)/1.055)**2.4}).reduce((s,c,i)=>s+c*[0.2126,0.7152,0.0722][i],0)}
function contrast(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)}
;(async()=>{
 const server=await (await import('vite')).preview({preview:{host:'127.0.0.1',port:5184,strictPort:true}})
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true})
 const results=[]
 try{
  for(const width of [1440,390]){
   const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'})
   await page.goto('http://127.0.0.1:5184/#arthabooks')
   const holder=page.locator('#arthabooks .project-gallery')
   await holder.scrollIntoViewIfNeeded()
   await holder.locator('.ag').waitFor()
   for(let index=0;index<5;index++){
    if(width===1440)await holder.locator('.ag__panel').nth(index).hover()
    else await holder.locator('.ag__selectors button').nth(index).click()
    assert.equal(await holder.locator('.ag__selectors button').nth(index).getAttribute('aria-pressed'),'true')
    const colors=await holder.evaluate(root=>{
     const rgb=s=>s.match(/[\d.]+/g).map(Number)
     let parent=root;while(parent && getComputedStyle(parent).backgroundColor==='rgba(0, 0, 0, 0)')parent=parent.parentElement
     const elements=[root.querySelector('.ag__caption'),root.querySelector('.ag__caption > span'),root.querySelector('.ag__toolbar button'),...root.querySelectorAll('.ag__selectors button')]
     return {background:rgb(getComputedStyle(parent).backgroundColor),text:elements.map(e=>rgb(getComputedStyle(e).color))}
    })
    for(const color of colors.text)assert.ok(contrast(color,colors.background)>=4.5,`Low contrast ${width}/${index}: ${color}`)
   }
   await holder.locator('.ag__selectors button').nth(1).focus()
   await page.keyboard.press('ArrowRight')
   assert.equal(await holder.locator('.ag__selectors button').nth(2).getAttribute('aria-pressed'),'true')
   const focus=await holder.locator('.ag__selectors button').nth(2).evaluate(el=>({style:getComputedStyle(el).outlineStyle,color:getComputedStyle(el).outlineColor}))
   assert.equal(focus.style,'solid')
   await holder.getByRole('button',{name:'Enlarge ArthaBooks: Profit & loss',exact:true}).click()
   await page.getByRole('dialog').waitFor({state:'visible'})
   assert.equal(await page.getByRole('dialog').evaluate(el=>getComputedStyle(el).color),'rgb(229, 228, 226)')
   await page.keyboard.press('Escape')
   await holder.locator('.ag__selectors button').nth(1).click()
   await page.waitForFunction(()=>document.querySelector('#arthabooks .ag__panel[data-active="true"] img')?.naturalWidth>0)
   await holder.screenshot({path:`anti-slop/verification/arthabooks-contrast-${width}.png`})
   results.push({width,allFiveSelections:'pass',textContrast:'>=4.5:1',keyboardFocus:'pass',dialogDarkTheme:'pass'})
   await page.close()
  }
  console.log(JSON.stringify(results,null,2))
  await fs.writeFile('anti-slop/verification/arthabooks-contrast.json',JSON.stringify(results,null,2))
 }finally{await browser.close();await new Promise(resolve=>server.httpServer.close(resolve))}
})().catch(e=>{console.error(e);process.exitCode=1})
