import halftone from '../../assets/images/gabriel-poster-halftone.webp'
import halftoneMobile from '../../assets/images/gabriel-poster-halftone-mobile.webp'
import { PROFILE } from '../../data/profile'
import { Section, SectionHeading } from '../layout/Section'
import { Reveal } from '../motion/Reveal'

export function About() {
  return (
    <Section id="about" tone="light" flushTop>
      <Reveal><SectionHeading tone="light" label="About" title="Experience & background" /></Reveal>
      <Reveal className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-8">
        <div className="order-2 min-w-0 lg:order-none">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-steel/40 pb-5">
            <div>
              <h3 className="text-body-lg">{PROFILE.education.degree}</h3>
              <p className="mt-2 text-body-md text-steel-deep">{PROFILE.education.institution}</p>
              <p className="mt-1 text-body-sm text-steel-deep">{PROFILE.education.period} · GPA {PROFILE.education.gpa}</p>
            </div>
            <a href={PROFILE.cv} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center rounded-btn border border-steel px-4 text-body-sm font-semibold text-onyx no-underline">View CV (PDF)</a>
          </div>
          <div className="mt-6 flex flex-col gap-6">
            {PROFILE.experience.map((experience) => <article key={experience.organization}>
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-4">
                <h3 className="text-body-lg">{experience.role}</h3>
                <p className="shrink-0 font-mono text-mono-xs text-steel">{experience.period}</p>
              </div>
              <p className="mt-2 text-body-md font-semibold text-onyx">{experience.organization}</p>
              <p className="mt-1 text-body-sm text-steel-deep">{experience.context}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-body-sm text-steel-deep">
                {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>)}
          </div>
          <p className="mt-6 border-t border-steel/40 pt-4 text-body-sm text-steel-deep">Languages: {PROFILE.languages}.</p>
          <details className="mt-4 border-b border-steel/40 pb-4">
            <summary className="cursor-pointer rounded-btn py-3 text-body-md font-semibold text-onyx">Leadership & campus activities</summary>
            <ul className="mt-3 flex flex-col gap-4">
              {PROFILE.leadership.map((item) => <li key={item.organization}>
                <p className="text-body-sm font-semibold text-onyx">{item.organization} · {item.period}</p>
                <p className="mt-1 text-body-sm text-steel-deep">{item.role}. {item.detail}</p>
              </li>)}
            </ul>
          </details>
        </div>
        <figure className="order-1 flex flex-col items-center gap-3 lg:order-none lg:items-end">
          <img src={halftone} srcSet={`${halftoneMobile} 420w, ${halftone} 1039w`}
            sizes="(max-width: 767px) 180px, (max-width: 1279px) 200px, 280px"
            alt="" width={1039} height={1224} loading="lazy" decoding="async"
            className="w-full max-w-[180px] lg:max-w-[200px] xl:max-w-[280px]" />
          <figcaption className="font-mono text-mono-xs text-steel">// beyond the code</figcaption>
        </figure>
      </Reveal>
    </Section>
  )
}
