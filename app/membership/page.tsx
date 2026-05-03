import Link from 'next/link';
import { Metadata } from 'next';
import MembershipForm from '../components/MembershipForm';

export const metadata: Metadata = {
  title: 'LBSAA United Kingdom Chapter | Membership',
};

export default function Membership() {
  return (
    <>


<section className="page-hero">
  <div className="inner">
    <div className="crumb"><a href="/index">Home</a> &nbsp;/&nbsp; Membership</div>
    <h1>Join the United Kingdom Chapter.</h1>
    <p className="lede">Open to MBA graduates, Executive Education alumni and full-time faculty of Lagos Business School, resident in the United Kingdom.</p>
  </div>
</section>

{/*  ELIGIBILITY  */}
<section className="section">
  <div className="container">
    <div className="eligibility">
      <div>
        <div className="eyebrow">Eligibility</div>
        <h2>Who can join.</h2>
        <p style={{ "marginTop": "24px" }}>Membership of the United Kingdom Chapter follows the eligibility criteria of the parent association. You should hold one of the qualifications below and be currently resident in the United Kingdom.</p>
      </div>
      <div>
        <ol className="elig-list">
          <li>
            <div className="num">i.</div>
            <div>
              <h4>MBA graduates of Lagos Business School</h4>
              <p>Full-time, Modular and Executive MBA alumni of all years, in good standing with the parent association.</p>
            </div>
          </li>
          <li>
            <div className="num">ii.</div>
            <div>
              <h4>Executive Education alumni</h4>
              <p>Graduates of LBS senior management, advanced management and chief executive programmes.</p>
            </div>
          </li>
          <li>
            <div className="num">iii.</div>
            <div>
              <h4>Full-time faculty of LBS</h4>
              <p>Current and emeritus full-time faculty members of Lagos Business School.</p>
            </div>
          </li>
          <li>
            <div className="num">iv.</div>
            <div>
              <h4>Residence in the United Kingdom</h4>
              <p>Members must be currently resident in England, Scotland, Wales or Northern Ireland. Visiting alumni are warmly welcome at chapter events.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</section>

{/*  BENEFITS  */}
<section className="section benefits">
  <div className="container">
    <div className="eyebrow">What you receive</div>
    <h2 style={{ "maxWidth": "720px" }}>Member benefits, written for the United Kingdom.</h2>
    <p style={{ "maxWidth": "580px", "marginTop": "16px" }}>In addition to the parent association's standing benefits, the Chapter delivers a UK-specific programme of events, partnerships and member services.</p>
    <div className="benefits-grid">
      <div className="benefit">
        <div className="num">01 / Convening</div>
        <h4>UK-based members' events</h4>
        <p>Three to five formal events each year — receptions, dinners, and visits from LBS faculty passing through London.</p>
      </div>
      <div className="benefit">
        <div className="num">02 / Programme</div>
        <h4>Access to parent programmes</h4>
        <p>Priority registration for the LBSAA Annual Conference in Lagos and parent-body Executive Education events open to members.</p>
      </div>
      <div className="benefit">
        <div className="num">03 / Network</div>
        <h4>UK alumni directory</h4>
        <p>A members-only directory of UK-based alumni, searchable by sector, programme and region. Phase 2.</p>
      </div>
      <div className="benefit">
        <div className="num">04 / Service</div>
        <h4>Peer support &amp; introductions</h4>
        <p>Practical peer support for relocation, school placement, and professional introductions across the UK alumni community.</p>
      </div>
      <div className="benefit">
        <div className="num">05 / Voice</div>
        <h4>Vote at the AGM</h4>
        <p>Voting rights at the Annual General Meeting and the right to stand for election to the Executive Committee after twelve months of membership.</p>
      </div>
      <div className="benefit">
        <div className="num">06 / Publications</div>
        <h4>Footprints &amp; Littleprints</h4>
        <p>Continued access to <em>Footprints</em> magazine (bi-annual) and <em>Littleprints</em> (monthly) from the parent association.</p>
      </div>
    </div>
    <div style={{ "display": "flex", "gap": "20px", "marginTop": "36px", "flexWrap": "wrap" }}>
      <a href="#" className="btn btn-outline">Full Benefits Schedule (PDF) <span className="arrow">→</span></a>
      <a href="#" className="btn btn-outline">Parent Body Benefits (PDF) <span className="arrow">→</span></a>
    </div>
  </div>
</section>

{/*  PROCESS  */}
<section className="section">
  <div className="container">
    <div className="eyebrow">How to join</div>
    <h2 style={{ "maxWidth": "700px" }}>A four-step process. Most applications are confirmed within ten working days.</h2>
    <div className="process">
      <div className="step">
        <div className="step-num">i.</div>
        <h4>Apply</h4>
        <p>Complete the application form below with your LBS programme, year and current UK address.</p>
      </div>
      <div className="step">
        <div className="step-num">ii.</div>
        <h4>Verify</h4>
        <p>The Secretary verifies your standing with the parent association in Lagos. Usually 5–7 days.</p>
      </div>
      <div className="step">
        <div className="step-num">iii.</div>
        <h4>Welcome</h4>
        <p>You receive a welcome note from the President and access to the members' communications channel.</p>
      </div>
      <div className="step">
        <div className="step-num">iv.</div>
        <h4>Attend</h4>
        <p>Your first event invitation arrives. Members are encouraged to attend at least one event in their first year.</p>
      </div>
    </div>
  </div>
</section>

{/*  APPLY FORM  */}
<section className="section apply-block" id="apply">
  <div className="container">
    <div className="apply-grid">
      <div className="apply-side">
        <div className="eyebrow">Application</div>
        <h2>Begin your application.</h2>
        <p className="lede">Membership for the 2026 year is open. Dues are confirmed by the Exco on a year-by-year basis.</p>
        <dl>
          <dt>Dues, 2026</dt>
          <dd>To be confirmed — likely free for parent-association financial members</dd>
          <dt>Processing time</dt>
          <dd>5–10 working days</dd>
          <dt>Questions</dt>
          <dd><a href="/contact">membership@lbsaauk.org</a></dd>
        </dl>
      </div>
      <MembershipForm />
    </div>
  </div>
</section>

{/*  FAQ  */}
<section className="section faq-block">
  <div className="container container-narrow">
    <div className="eyebrow">Questions</div>
    <h2>Frequently asked.</h2>
    <div className="faq">
      <details open>
        <summary>Are there membership dues?</summary>
        <p>Dues are confirmed by the Executive Committee on a year-by-year basis. For 2026 the position is being finalised; the working assumption is that membership is free for those who are already financial members of the parent association in Lagos.</p>
      </details>
      <details>
        <summary>I am a Nigerian alumnus visiting the UK temporarily — can I attend events?</summary>
        <p>Yes. Visiting alumni are warmly welcome at chapter events. Formal membership requires UK residence, but our events are open to all LBS alumni in the country at the time, subject to capacity.</p>
      </details>
      <details>
        <summary>How is my standing with the parent association verified?</summary>
        <p>The Secretary corresponds with the parent LBSAA in Lagos to confirm your standing. The verification step is the longest part of the process; we ask for your patience, particularly for graduates of the modular and executive programmes whose records can take a little longer to retrieve.</p>
      </details>
      <details>
        <summary>What happens to my data?</summary>
        <p>Your data is held by the United Kingdom Chapter for the purpose of administering your membership. We do not share it with third parties. The Chapter will register with the Information Commissioner's Office (ICO) as a data controller in due course. See our <a href="#">privacy policy</a> for the full position.</p>
      </details>
      <details>
        <summary>When can I stand for the Executive Committee?</summary>
        <p>Members in good standing for at least twelve months are eligible to stand at the Annual General Meeting, which is held each July.</p>
      </details>
    </div>
  </div>
</section>


    </>
  );
}
