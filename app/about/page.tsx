import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LBSAA United Kingdom Chapter | About',
};

export default function About() {
  return (
    <>


<section className="page-hero">
  <div className="inner">
    <div className="crumb"><a href="/index">Home</a> &nbsp;/&nbsp; About</div>
    <h1>The Chapter, its mandate and the people who run it.</h1>
    <p className="lede">Founded in 2024 to gather Lagos Business School alumni resident in the United Kingdom — and to extend the work of the parent association into a British setting.</p>
  </div>
</section>

{/*  STORY  */}
<section className="section">
  <div className="container">
    <div className="story-grid">
      <aside className="story-side">
        <div className="figure photo" data-label="CHAPTER GROUP, 2024"></div>
        <dl>
          <dt>Established</dt>
          <dd>2024</dd>
          <dt>Legal status</dt>
          <dd>Unincorporated Association<br /><span style={{ "fontFamily": "var(--sans)", "fontSize": "0.85rem", "color": "var(--ink-muted)" }}>CIO transition planned, month 12</span></dd>
          <dt>Members</dt>
          <dd>140+</dd>
          <dt>Affiliation</dt>
          <dd>LBSAA (Lagos)</dd>
        </dl>
      </aside>
      <div className="story-body">
        <div className="eyebrow">Chapter Story</div>
        <h2 style={{ "marginBottom": "28px" }}>A regional chapter, in good standing with Lagos.</h2>
        <p>The United Kingdom Chapter of the Lagos Business School Alumni Association was established in 2024 to bring together LBS graduates resident in Britain. Its founding was a long time in the making: the UK has been one of the most established communities of LBS alumni outside Nigeria for over a decade, and the case for a formal chapter — one that could speak with the parent body, host visiting faculty, and run its own programme of events — had been put to successive Excos in Lagos.</p>
        <p>The Chapter draws its charter from the parent LBSAA, and ultimately from Lagos Business School and Pan-Atlantic University. We are not a social organisation, and we are not an independent institution. We are a regional vehicle for alumni effort, governed by the parent association's three-pillar mandate and an elected United Kingdom Executive Committee.</p>
        <div className="pullquote">"The case for a UK Chapter was always less about creating something new than about recognising what was already happening — alumni in Britain had been gathering for years, and a formal Chapter let us do it well."</div>
        <p>In its first year the Chapter has registered as an Unincorporated Association under English law, opened a chapter bank account, drafted a constitution aligned to the parent body's, and run three formal members' events in London with a fourth planned in Manchester. A transition to Charitable Incorporated Organisation status is planned for the Chapter's first anniversary, subject to membership approval and Charity Commission registration.</p>
        <p>Day-to-day, the Chapter is run by a six-member Executive Committee, elected by the membership at the AGM. The Exco meets monthly, reports to the membership annually, and corresponds regularly with the parent association in Lagos.</p>

        <div className="timeline">
          <div className="tl-row">
            <div className="when">2024</div>
            <div>
              <h4>Chapter founded</h4>
              <p>Inaugural meeting in London, election of the first Executive Committee, registration as an Unincorporated Association under English law.</p>
            </div>
          </div>
          <div className="tl-row">
            <div className="when">2025</div>
            <div>
              <h4>First full year of programming</h4>
              <p>Three formal members' events delivered, draft constitution circulated, parent body affiliation confirmed in writing.</p>
            </div>
          </div>
          <div className="tl-row">
            <div className="when">2026</div>
            <div>
              <h4>CIO transition (planned)</h4>
              <p>Application for Charitable Incorporated Organisation status with the Charity Commission for England and Wales.</p>
            </div>
          </div>
          <div className="tl-row" style={{ "borderBottom": "0" }}>
            <div className="when">2027 →</div>
            <div>
              <h4>Regional sub-chapters</h4>
              <p>Manchester and Edinburgh sub-chapters under consideration, subject to membership density and volunteer capacity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  MANDATE EXPANDED  */}
<section className="section" style={{ "background": "var(--cream)", "paddingTop": "80px" }}>
  <div className="container">
    <div className="eyebrow">Mandate</div>
    <h2 style={{ "marginBottom": "48px", "maxWidth": "800px" }}>Three pillars, inherited from the parent association without amendment.</h2>
    <div style={{ "display": "grid", "gridTemplateColumns": "repeat(3, 1fr)", "gap": "32px" }}>
      <div style={{ "borderTop": "2px solid var(--navy)", "paddingTop": "24px" }}>
        <div style={{ "fontFamily": "var(--serif)", "fontStyle": "italic", "fontSize": "1.2rem", "color": "var(--gold)", "marginBottom": "14px" }}>Pillar i.</div>
        <h3 style={{ "fontSize": "1.8rem", "marginBottom": "14px" }}>Promote</h3>
        <p style={{ "fontSize": "0.95rem" }}>Continuous education and stronger relationships among UK members. The Chapter convenes alumni for fellowship, peer learning and visits from LBS faculty.</p>
      </div>
      <div style={{ "borderTop": "2px solid var(--navy)", "paddingTop": "24px" }}>
        <div style={{ "fontFamily": "var(--serif)", "fontStyle": "italic", "fontSize": "1.2rem", "color": "var(--gold)", "marginBottom": "14px" }}>Pillar ii.</div>
        <h3 style={{ "fontSize": "1.8rem", "marginBottom": "14px" }}>Support</h3>
        <p style={{ "fontSize": "0.95rem" }}>The aims and objectives of LBS and the parent LBSAA. The Chapter represents the school in the UK and channels alumni effort to its priorities.</p>
      </div>
      <div style={{ "borderTop": "2px solid var(--navy)", "paddingTop": "24px" }}>
        <div style={{ "fontFamily": "var(--serif)", "fontStyle": "italic", "fontSize": "1.2rem", "color": "var(--gold)", "marginBottom": "14px" }}>Pillar iii.</div>
        <h3 style={{ "fontSize": "1.8rem", "marginBottom": "14px" }}>Service</h3>
        <p style={{ "fontSize": "0.95rem" }}>To society, especially in matters of public and private management — bringing the LBS standard of professional ethics into the United Kingdom.</p>
      </div>
    </div>
  </div>
</section>

{/*  EXCO  */}
<section className="section exco" id="exco" style={{ "background": "var(--paper)" }}>
  <div className="container">
    <div className="eyebrow">Executive Committee</div>
    <h2 style={{ "maxWidth": "700px" }}>The 2026 Exco.</h2>
    <p style={{ "maxWidth": "580px", "marginTop": "16px" }}>Elected by the membership at the AGM. The committee meets monthly and reports annually to members and to the parent body.</p>
    <div className="sample-strip" style={{ "margin": "32px 0 0" }}><strong>In confirmation:</strong> portfolios and biographies are being finalised. Names below are correct; portraits, programmes and full bios will be added before public launch.</div>
    <div className="exco-grid">
      <article className="exco-card">
        <div className="silhouette"><div className="monogram" aria-hidden="true">S</div></div>
        <div className="body">
          <div className="role">President / Chair</div>
          <h3>Stella</h3>
          <div className="programme">LBS · Programme &amp; Year TBC</div>
          <p>Stella chairs the Executive Committee and represents the Chapter to the parent association in Lagos. <em>Full bio to follow.</em></p>
        </div>
      </article>
      <article className="exco-card">
        <div className="silhouette"><div className="monogram" aria-hidden="true">NJ</div></div>
        <div className="body">
          <div className="role">Secretary</div>
          <h3>Nkem Joseph-Palmer</h3>
          <div className="programme">LBS · Programme &amp; Year TBC</div>
          <p>Nkem is the Chapter Secretary, with responsibility for governance, minutes and the membership record. <em>Full bio to follow.</em></p>
        </div>
      </article>
      <article className="exco-card">
        <div className="silhouette"><div className="monogram" aria-hidden="true">W</div></div>
        <div className="body">
          <div className="role">Officer <span className="tbc">Role TBC</span></div>
          <h3>Winston</h3>
          <div className="programme">LBS · Programme &amp; Year TBC</div>
          <p>Winston serves on the Executive Committee. Portfolio and bio to be confirmed.</p>
        </div>
      </article>
      <article className="exco-card">
        <div className="silhouette"><div className="monogram" aria-hidden="true">K</div></div>
        <div className="body">
          <div className="role">Officer <span className="tbc">Role TBC</span></div>
          <h3>Kim</h3>
          <div className="programme">LBS · Programme &amp; Year TBC</div>
          <p>Kim serves on the Executive Committee. Portfolio and bio to be confirmed.</p>
        </div>
      </article>
      <article className="exco-card">
        <div className="silhouette"><div className="monogram" aria-hidden="true">R</div></div>
        <div className="body">
          <div className="role">Officer <span className="tbc">Role TBC</span></div>
          <h3>Rachel</h3>
          <div className="programme">LBS · Programme &amp; Year TBC</div>
          <p>Rachel serves on the Executive Committee. Portfolio and bio to be confirmed.</p>
        </div>
      </article>
      <article className="exco-card">
        <div className="silhouette"><div className="monogram" aria-hidden="true">JM</div></div>
        <div className="body">
          <div className="role">Officer <span className="tbc">Role TBC</span></div>
          <h3>Dr John Mukoro</h3>
          <div className="programme">LBS · Programme &amp; Year TBC</div>
          <p>Dr Mukoro serves on the Executive Committee and holds the Chapter's digital credentials. Portfolio and bio to be confirmed.</p>
        </div>
      </article>
    </div>
  </div>
</section>

{/*  GOVERNANCE  */}
<section className="section" style={{ "paddingTop": "0" }}>
  <div className="container">
    <div className="eyebrow">Governance</div>
    <h2 style={{ "marginBottom": "48px", "maxWidth": "700px" }}>How the Chapter is structured and accountable.</h2>
    <dl className="governance-grid">
      <div className="gov-cell">
        <dt>Legal form</dt>
        <dd>Unincorporated Association</dd>
        <p>The Chapter currently operates as an Unincorporated Association under English law, governed by its constitution and the parent body's mandate.</p>
      </div>
      <div className="gov-cell">
        <dt>Future status</dt>
        <dd>Charitable Incorporated Organisation</dd>
        <p>A transition to CIO status is planned at the twelve-month mark, subject to membership approval and Charity Commission registration.</p>
      </div>
      <div className="gov-cell">
        <dt>Reporting</dt>
        <dd>Annual report &amp; AGM</dd>
        <p>The Exco reports to members at the Annual General Meeting and to the parent association in Lagos through quarterly correspondence.</p>
      </div>
    </dl>
    <div style={{ "display": "flex", "gap": "20px", "marginTop": "40px", "flexWrap": "wrap" }}>
      <a href="#" className="btn btn-outline">Constitution (PDF) <span className="arrow">→</span></a>
      <a href="#" className="btn btn-outline">Annual Report 2025 (PDF) <span className="arrow">→</span></a>
    </div>
  </div>
</section>

{/*  AFFILIATION  */}
<section className="cta-band" style={{ "background": "var(--navy)", "color": "var(--cream)", "padding": "110px 32px", "position": "relative", "overflow": "hidden" }}>
  <div className="container" style={{ "textAlign": "center", "position": "relative" }}>
    <img src="assets/lbs-logo.png" alt="Lagos Business School" style={{ "height": "80px", "width": "auto", "margin": "0 auto 32px", "display": "block", "filter": "brightness(0) invert(1)", "opacity": "0.95" }} />
    <div className="eyebrow" style={{ "color": "var(--gold-soft)", "justifyContent": "center" }}>In good standing with</div>
    <h2 style={{ "color": "var(--cream)", "fontWeight": "400", "maxWidth": "740px", "margin": "0 auto 22px" }}>The <em style={{ "color": "var(--gold-soft)", "fontStyle": "italic" }}>Lagos Business School Alumni Association</em>, parent body.</h2>
    <p style={{ "color": "rgba(245, 239, 227, 0.8)", "maxWidth": "560px", "margin": "0 auto 36px" }}>Our charter, our mandate and our standards are inherited from the LBSAA in Lagos. We exist to extend its work into the United Kingdom.</p>
    <a href="#" className="btn btn-ghost">Visit LBSAA Lagos <span className="arrow">→</span></a>
  </div>
</section>


    </>
  );
}
