import Link from 'next/link';
import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'LBSAA United Kingdom Chapter | Contact',
};

export default function Contact() {
  return (
    <>


<section className="page-hero">
  <div className="inner">
    <div className="crumb"><a href="/index">Home</a> &nbsp;/&nbsp; Contact</div>
    <h1>Get in touch with the Chapter.</h1>
    <p className="lede">For membership enquiries, partnership conversations, press, or anything else — please use the form below or write to the relevant Exco officer directly.</p>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="contact-grid">
      <div className="contact-side">
        <div className="eyebrow">Direct contact</div>
        <h2 style={{ "marginBottom": "16px" }}>Where to write.</h2>
        <p className="lede">The Chapter is run by volunteer Exco members. We aim to respond within five working days.</p>
        <dl>
          <div className="row">
            <dt>General enquiries</dt>
            <dd><a href="mailto:info@lbsaauk.org">info@lbsaauk.org</a></dd>
          </div>
          <div className="row">
            <dt>Membership</dt>
            <dd><a href="mailto:membership@lbsaauk.org">membership@lbsaauk.org</a>
              <span className="small">For new applications, status questions, and the member directory.</span>
            </dd>
          </div>
          <div className="row">
            <dt>Office of the Secretary</dt>
            <dd><a href="mailto:secretary@lbsaauk.org">secretary@lbsaauk.org</a>
              <span className="small">Governance, minutes, parent-body correspondence. Nkem Joseph-Palmer.</span>
            </dd>
          </div>
          <div className="row">
            <dt>Office of the President</dt>
            <dd><a href="mailto:president@lbsaauk.org">president@lbsaauk.org</a>
              <span className="small">Strategic and partnership matters. Stella, Chair.</span>
            </dd>
          </div>
          <div className="row">
            <dt>Press</dt>
            <dd><a href="mailto:press@lbsaauk.org">press@lbsaauk.org</a></dd>
          </div>
          <div className="row">
            <dt>Registered correspondence</dt>
            <dd>To be confirmed
              <span className="small">A registered address will be published once the CIO transition is complete.</span>
            </dd>
          </div>
        </dl>
      </div>

      <ContactForm />
    </div>
  </div>
</section>

{/*  ROUTING  */}
<section className="section routing">
  <div className="container">
    <div className="eyebrow">Who handles what</div>
    <h2 style={{ "maxWidth": "720px", "marginBottom": "32px" }}>Exco portfolios.</h2>
    <div className="routing-grid">
      <div className="route-cell">
        <div className="role">President / Chair</div>
        <h4>Stella</h4>
        <p>Strategic direction, partnerships, parent-body relationships, public representation.</p>
        <a href="mailto:president@lbsaauk.org">president@lbsaauk.org</a>
      </div>
      <div className="route-cell">
        <div className="role">Secretary</div>
        <h4>Nkem Joseph-Palmer</h4>
        <p>Governance, minutes, constitution, member record, ICO correspondence.</p>
        <a href="mailto:secretary@lbsaauk.org">secretary@lbsaauk.org</a>
      </div>
      <div className="route-cell">
        <div className="role">Membership</div>
        <h4>Exco officer (TBC)</h4>
        <p>New applications, member status, directory, peer support introductions.</p>
        <a href="mailto:membership@lbsaauk.org">membership@lbsaauk.org</a>
      </div>
      <div className="route-cell">
        <div className="role">Events</div>
        <h4>Exco officer (TBC)</h4>
        <p>Programme of events, venues, RSVPs, capacity, calendar coordination.</p>
        <a href="mailto:events@lbsaauk.org">events@lbsaauk.org</a>
      </div>
    </div>
  </div>
</section>


    </>
  );
}
