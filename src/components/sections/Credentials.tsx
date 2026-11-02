import { SELECTED_CREDENTIALS, OTHER_COURSES, type Credential } from '../../data/credentials'

function CredentialLinks({ credential }: { credential: Credential }) {
  return <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-body-sm text-steel">
    {credential.verification && <a className="inline-flex min-h-[44px] items-center rounded-btn underline underline-offset-4" href={credential.verification} target="_blank" rel="noreferrer noopener">Verify</a>}
    {credential.document && <a className="inline-flex min-h-[44px] items-center rounded-btn underline underline-offset-4" href={credential.document} target="_blank" rel="noreferrer">View certificate (PDF)</a>}
  </div>
}

export function Credentials() {
  return <section id="credentials" aria-labelledby="credentials-heading" className="mt-8 scroll-mt-8">
    <h3 id="credentials-heading" className="font-display text-display-md">Certifications &amp; courses</h3>
    <ul className="mt-5 divide-y divide-steel/40 border-y border-steel/40">
      {SELECTED_CREDENTIALS.map((credential) => <li key={credential.title} className="grid gap-2 py-5 md:grid-cols-[minmax(0,1fr)_auto] md:gap-5">
        <div className="min-w-0">
          <h4 className="text-body-md font-semibold">{credential.title}</h4>
          <p className="mt-2 text-body-sm text-steel-deep">{credential.issuer} · {credential.date}</p>
          <p className="mt-1 font-mono text-mono-xs text-steel">{credential.kind}</p>
        </div>
        <CredentialLinks credential={credential} />
      </li>)}
    </ul>
    <details className="mt-4 border-b border-steel/40 pb-4">
      <summary className="cursor-pointer rounded-btn py-3 text-body-md font-semibold">Other courses ({OTHER_COURSES.length})</summary>
      <ul className="mt-3 grid gap-x-6 gap-y-5 lg:grid-cols-2">
        {OTHER_COURSES.map((credential) => <li key={credential.title}>
          <h4 className="text-body-sm font-semibold">{credential.title}</h4>
          <p className="mt-1 text-body-sm text-steel-deep">{credential.issuer} · {credential.date}</p>
          <p className="mt-1 font-mono text-mono-xs text-steel">{credential.kind}</p>
          <CredentialLinks credential={credential} />
        </li>)}
      </ul>
    </details>
  </section>
}
