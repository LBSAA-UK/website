import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LBSAA United Kingdom Chapter | Privacy',
};

export default function Privacy() {
  return (
    <>


<section className="page-hero">
  <div className="inner">
    <div className="crumb"><a href="/index">Home</a> &nbsp;/&nbsp; Privacy Policy</div>
    <h1>Privacy Policy.</h1>
    <p className="lede">How the United Kingdom Chapter handles personal data.</p>
  </div>
</section>

<section className="legal">
  <div className="container container-narrow">
    <p className="updated">Draft — last updated May 2026</p>
    <p style={{ "marginTop": "24px" }}><span className="sample-badge">Draft</span> &nbsp; This policy is in draft and will be finalised by the Executive Committee before public launch and ICO registration.</p>

    <h2>1. Who we are</h2>
    <p>The Lagos Business School Alumni Association — United Kingdom Chapter ("the Chapter", "we") is an Unincorporated Association based in the United Kingdom, operating as a regional chapter of the LBSAA in Lagos. A transition to Charitable Incorporated Organisation status is planned.</p>
    <p>For questions about this policy or your personal data, contact the Secretary at <a href="mailto:secretary@lbsaauk.org">secretary@lbsaauk.org</a>.</p>

    <h2>2. What data we collect</h2>
    <ul>
      <li><strong>Membership data</strong> &mdash; name, email, mobile (optional), LBS programme &amp; year, employer &amp; role, UK city, source.</li>
      <li><strong>Correspondence data</strong> &mdash; messages you send via our forms or by email.</li>
      <li><strong>Event data</strong> &mdash; RSVPs, dietary requirements, accessibility needs (kept only as long as needed).</li>
      <li><strong>Technical data</strong> &mdash; basic server logs (IP address, user agent) for security and abuse prevention.</li>
    </ul>

    <h2>3. Lawful basis</h2>
    <p>We rely on <em>consent</em> for membership administration and newsletters, on <em>contract</em> for event delivery, and on <em>legitimate interest</em> for safeguarding the Chapter from abuse. You can withdraw consent at any time.</p>

    <h2>4. How we use your data</h2>
    <ul>
      <li>To administer your membership and verify your standing with the parent association in Lagos.</li>
      <li>To invite you to Chapter events and send you Chapter communications you have opted into.</li>
      <li>To respond to enquiries you send us.</li>
      <li>To produce aggregate, non-identifying statistics for the Exco and AGM reporting.</li>
    </ul>

    <h2>5. Sharing</h2>
    <p>We do not sell or rent personal data. We share your data only with:</p>
    <ul>
      <li>The parent LBSAA in Lagos, for verification of standing.</li>
      <li>Service providers (email, forms, hosting) under written processor agreements.</li>
      <li>Authorities, where required by law.</li>
    </ul>

    <h2>6. Retention</h2>
    <p>Membership data is retained while you are a member and for a reasonable period afterwards for governance and audit purposes. Event data is retained for the cycle of the relevant event. Server logs are kept for no more than 90 days.</p>

    <h2>7. Your rights</h2>
    <p>You have the right to access, correct, delete, restrict, port and object to processing of your personal data, and to withdraw consent. Write to the Secretary to exercise any of these rights. You may also complain to the Information Commissioner's Office (ICO).</p>

    <h2>8. Cookies</h2>
    <p>See our <a href="/cookies">cookies policy</a>.</p>

    <h2>9. Changes to this policy</h2>
    <p>We will post material changes here and notify members by email. The "last updated" date above will reflect the most recent revision.</p>
  </div>
</section>


    </>
  );
}
