const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright')
const assert=require('node:assert/strict')
const fs=require('node:fs/promises')
const crypto=require('node:crypto')
const files=[
 ['public/cv/gabriel-gaetano-software-developer.pdf','D:/Administrasi/CV/CV_Gabriel Gaetano_Software Developer.pdf'],
 ['public/credentials/javascript-developer-2026.pdf','D:/Administrasi/SERTIFIKASI/FOLDER SEMUA/freecodecamp.org_certification_gabrielgaetano_javascript-v9.pdf'],
 ['public/credentials/secure-computer-user-2023.pdf','D:/Administrasi/SERTIFIKASI/FOLDER SEMUA/ECC-CSCU-Certificate.pdf'],
 ['public/credentials/php-mysql-2025.pdf','D:/Administrasi/SERTIFIKASI/FOLDER SEMUA/UC-51d4c69e-d12b-435f-bd69-1bfbb42e3e64.pdf'],
 ['public/credentials/ai-foundations-2025.pdf','D:/Administrasi/SERTIFIKASI/FOLDER SEMUA/sertifikat_course_653_5514938_061225193107.pdf'],
]
const digest=data=>crypto.createHash('sha256').update(data).digest('hex')
function ratio(a,b){const lum=s=>s.match(/[\d.]+/g).slice(0,3).map(Number).map(x=>{x/=255;return x<=0.04045?x/12.92:((x+0.055)/1.055)**2.4}).reduce((s,c,i)=>s+c*[0.2126,0.7152,0.0722][i],0);const x=lum(a),y=lum(b);return(Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)}
;(async()=>{
 const server=await(await import('vite')).preview({preview:{host:'127.0.0.1',port:5185,strictPort:true}})
 const browser=await chromium.launch({executablePath:process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true})
 const results=[],errors=[]
 try{
  for(const width of [1440,768,390,360]){
   const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'})
   page.on('pageerror',e=>errors.push(e.message))
   const root=await page.goto('http://127.0.0.1:5185/')
   const html=await root.text()
   assert.ok(!html.includes('__PROFILE_'))
   assert.equal(await page.title(),'Gabriel Gaetano Onen Baskara | Software Developer')
   const person=await page.locator('script[type="application/ld+json"]').first().textContent()
   assert.equal(JSON.parse(person).jobTitle,'Software Developer')
   assert.ok(JSON.parse(person).sameAs.includes('https://www.linkedin.com/in/gabriel-gaetano-onen-baskara/'))
   assert.deepEqual(await page.locator('#work article').evaluateAll(nodes=>nodes.slice(0,3).map(n=>n.id)),['eaglejeans','arthabooks','spotify-clone'])
   const about=page.locator('#about')
   await about.scrollIntoViewIfNeeded()
   await page.getByText('Jun-Oct 2026',{exact:true}).waitFor()
   const text=await about.innerText()
   assert.ok(text.includes('Jan-May 2026') && text.includes('Resolved 12 bugs') && text.includes('GPA 3.54/4.00'))
   assert.ok(!text.includes('Present'))
   const leadership=about.locator('summary')
   await leadership.focus();await page.keyboard.press('Enter')
   assert.equal(await about.locator('details').getAttribute('open'),'')
   assert.ok((await about.innerText()).includes('IDR 20-25 million'))
   await leadership.press('Enter')
   const credentials=page.locator('#credentials')
   await credentials.scrollIntoViewIfNeeded()
   assert.equal(await credentials.locator(':scope > ul > li').count(),4)
   assert.ok((await page.locator('#skills').innerText()).includes('Docker Compose (foundational)'))
   const colors=await credentials.locator(':scope > ul').evaluate(root=>[...root.querySelectorAll('h4,p,a')].map(el=>getComputedStyle(el).color))
   for(const color of colors)assert.ok(ratio(color,'rgb(229, 228, 226)')>=4.5,`credential contrast: ${color}`)
   await credentials.locator('summary').focus();await page.keyboard.press('Enter')
   assert.equal(await credentials.locator('details ul > li').count(),7)
   assert.ok((await credentials.innerText()).includes('Course completion'))
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false)
   await credentials.locator('summary').press('Enter')
   await credentials.screenshot({path:`anti-slop/verification/credentials-${width}.png`})
   await page.evaluate(()=>document.getElementById('about').scrollIntoView({block:'start'}))
   if(width===1440)await page.screenshot({path:'anti-slop/verification/experience-desktop.png'})
   if(width===390)await page.screenshot({path:'anti-slop/verification/experience-mobile.png'})
   await page.evaluate(()=>window.scrollTo(0,0))
   await page.waitForFunction(()=>getComputedStyle(document.querySelector('#hero h1')).opacity==='1')
   if(width===1440 || width===390)await page.screenshot({path:`anti-slop/verification/profile-hero-${width}.png`})
   if(width<768){
    await page.getByRole('button',{name:'Open menu',exact:true}).click()
    await page.getByRole('dialog',{name:'Menu',exact:true}).waitFor({state:'visible'})
    await page.keyboard.press('Escape')
    await page.getByRole('dialog',{name:'Menu',exact:true}).waitFor({state:'hidden'})
   }
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false)
   results.push({width,profileAndMetadata:'pass',featuredOrder:'pass',experience:'pass',credentials:'4 selected + 7 courses',credentialContrast:'>=4.5:1',disclosuresKeyboard:'pass',horizontalOverflow:false})
   if(width===1440){
    const reuse=await page.locator('#reusemart').innerText()
    assert.ok(reuse.includes('Team project: 3 members') && reuse.includes('point refunds') && reuse.includes('Three PDF reports'))
    assert.equal(await page.locator('#spotify-clone a[href="https://github.com/Tano11933/spotify-backend"]').count(),1)
    assert.equal(await page.locator('#spotify-clone a[href="https://github.com/Tano11933/spotify-frontend"]').count(),1)
    assert.equal(await page.locator('#padukuhan-tritis a[href="https://github.com/Tano11933/dusun_tritis"]').count(),1)
    for(const[local,source]of files){
     const response=await page.request.get(`http://127.0.0.1:5185/${local.replace('public/','')}`)
     assert.equal(response.status(),200)
     const bytes=await response.body()
     assert.equal(bytes.subarray(0,5).toString(),'%PDF-')
     assert.equal(digest(bytes),digest(await fs.readFile(source)))
    }
    const markdown=await(await page.request.get('http://127.0.0.1:5185/index.md')).text()
    assert.ok(markdown.includes('Jun-Oct 2026') && markdown.includes('Team project: 3 members') && markdown.includes('Certified Secure Computer User v2'))
    assert.ok(!markdown.includes('558') && !markdown.includes('p95') && !markdown.includes('June 2026 to present'))
    assert.ok((await(await page.request.get('http://127.0.0.1:5185/sitemap.xml')).text()).includes('2026-11-02'))
   }
   await page.close()
  }
  assert.deepEqual(errors,[])
  results.push({pdfIntegrity:'CV and 4 certificates byte-identical to provided sources',textAndSitemap:'pass',errors})
  await fs.writeFile('anti-slop/verification/cv-sync-results.json',JSON.stringify(results,null,2))
  console.log(JSON.stringify(results,null,2))
 }finally{await browser.close();await new Promise(resolve=>server.httpServer.close(resolve))}
})().catch(e=>{console.error(e);process.exitCode=1})
