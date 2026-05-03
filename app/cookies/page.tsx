import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LBSAA United Kingdom Chapter | Cookies',
};

export default function Cookies() {
  return (
    <>


<section className="page-hero">
  <div className="inner">
    <div className="crumb"><a href="/index">Home</a> &nbsp;/&nbsp; Cookies</div>
    <h1>Cookies Policy.</h1>
    <p className="lede">A short note about the cookies and local storage this site uses.</p>
  </div>
</section>

<section className="legal">
  <div className="container container-narrow">
    <p className="updated">Draft — last updated May 2026</p>
    <p style={{ "marginTop": "24px" }}>This site uses a small number of strictly necessary client-side storage entries. We do not use third-party tracking, advertising or marketing cookies.</p>

    <h2>What we use</h2>
    <table>
      <thead><tr><th>Name</th><th>Purpose</th><th>Type</th><th>Lifetime</th></tr></thead>
      <tbody>
        <tr>
          <td><code>lbsaa-cookie-choice</code></td>
          <td>Remembers your cookie banner choice so you are not asked again.</td>
          <td>localStorage</td>
          <td>Until cleared</td>
        </tr>
      </tbody>
    </table>
    <p>If we add analytics in future (e.g. a privacy-respecting tool such as Plausible or Fathom, which do not use cookies), this page will be updated before deployment.</p>

    <h2>Managing your choices</h2>
    <p>You can clear your stored choice by clearing site data in your browser, after which the banner will reappear and you can choose again.</p>

    <h2>Contact</h2>
    <p>Questions about this policy: <a href="mailto:secretary@lbsaauk.org">secretary@lbsaauk.org</a>.</p>
  </div>
</section>


    </>
  );
}
