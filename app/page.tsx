import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LBSAA United Kingdom Chapter | Home",
  description: "The United Kingdom Chapter of the Lagos Business School Alumni Association — events, membership and news for LBS alumni in Britain.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true"></div>
        <div className="inner">
          <div className="crumb">Established 2024 &middot; United Kingdom</div>
          <h1>
            Lagos Business School Alumni Association —{" "}
            <em>United Kingdom Chapter</em>
          </h1>
          <p className="lede">
            The regional home for LBS alumni across Britain. Continuing education,
            professional fellowship and service — in good standing with our
            parent body in Lagos.
          </p>
          <div className="hero-actions">
            <Link href="/membership#apply" className="btn">
              Become a Member <span className="arrow">→</span>
            </Link>
            <Link href="/events" className="btn btn-ghost">
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* ANCHOR STRIP */}
      <nav className="anchor-strip" aria-label="Jump to section">
        <div className="inner">
          <a href="#about">About</a>
          <a href="#mandate">Mandate</a>
          <a href="#events">Events</a>
          <a href="#membership">Membership</a>
          <a href="#news">News</a>
          <a href="#parent">Parent Body</a>
        </div>
      </nav>

      {/* ABOUT INTRO */}
      <section className="section" id="about">
        <div className="container">
          <div className="intro-grid">
            <div>
              <div className="eyebrow">About the Chapter</div>
              <h2>
                A regional home for LBS alumni in <em>Britain</em>.
              </h2>
            </div>
            <div>
              <p className="lede" style={{ marginBottom: 28 }}>
                The United Kingdom Chapter exists to gather, support and represent
                Lagos Business School alumni resident in Britain — and to extend
                the work of the parent association into a UK setting.
              </p>
              <p>
                We are a regional chapter of the Lagos Business School Alumni
                Association (LBSAA), drawing our charter from Lagos Business
                School and Pan-Atlantic University. Our members are MBA graduates,
                Executive Education alumni and full-time faculty of LBS, now
                living and working across England, Scotland, Wales and Northern
                Ireland.
              </p>
              <p>
                The Chapter is an Unincorporated Association in good standing,
                with a CIO transition planned at twelve months. Our work is
                governed by an elected Executive Committee and the standing
                mandate of the parent body.
              </p>
              <Link href="/about" className="btn btn-outline" style={{ marginTop: 12 }}>
                Read the full story <span className="arrow">→</span>
              </Link>
              <dl className="intro-meta">
                <div>
                  <dt>Established</dt>
                  <dd>2024</dd>
                </div>
                <div>
                  <dt>Legal status</dt>
                  <dd>Unincorporated Assoc.</dd>
                </div>
                <div>
                  <dt>Members</dt>
                  <dd>140+ &amp; growing</dd>
                </div>
                <div>
                  <dt>Geography</dt>
                  <dd>United Kingdom</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* MANDATE */}
      <section className="section mandate" id="mandate">
        <div className="container">
          <div className="mandate-head">
            <div>
              <div className="eyebrow">Our Mandate</div>
              <h2>Three pillars, inherited from the parent association.</h2>
            </div>
            <p>
              The Association is not a social organisation. It exists to support
              the aims and objectives of LBS — and the United Kingdom Chapter
              inherits this mandate without amendment.
            </p>
          </div>
          <div className="pillars">
            <article className="pillar">
              <span className="num">i.</span>
              <div className="glyph" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="#0F1E3D"
                  strokeWidth="1.2"
                >
                  <circle cx="14" cy="14" r="10" />
                  <path d="M14 4v20M4 14h20" strokeWidth="0.8" />
                  <circle cx="14" cy="14" r="4" />
                </svg>
              </div>
              <h3>Promote</h3>
              <p>
                Continuous education and stronger relationships among UK members —
                through convenings, peer programmes and dialogue with faculty
                visiting from Lagos.
              </p>
            </article>
            <article className="pillar">
              <span className="num">ii.</span>
              <div className="glyph" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="#0F1E3D"
                  strokeWidth="1.2"
                >
                  <path d="M4 22V10l10-6 10 6v12" />
                  <path d="M10 22v-7h8v7" />
                </svg>
              </div>
              <h3>Support</h3>
              <p>
                The aims and objectives of Lagos Business School and the parent
                LBSAA — by representing the institution well in the United Kingdom
                and channelling alumni effort to its strategic priorities.
              </p>
            </article>
            <article className="pillar">
              <span className="num">iii.</span>
              <div className="glyph" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="#0F1E3D"
                  strokeWidth="1.2"
                >
                  <path d="M14 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                </svg>
              </div>
              <h3>Service</h3>
              <p>
                To society — especially in matters of public and private
                management — bringing the LBS standard of professional ethics to
                the UK communities and institutions in which our members lead.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section className="section" id="events">
        <div className="container">
          <div className="preview-head">
            <div>
              <div className="eyebrow">What&apos;s coming up</div>
              <h2>Upcoming events.</h2>
            </div>
            <div className="right">
              <Link href="/events" className="view-all">
                View all events &rarr;
              </Link>
            </div>
          </div>
          <div className="sample-strip" style={{ marginBottom: 40 }}>
            <strong>Sample programme:</strong> dates and venues below are
            illustrative pending Exco confirmation for 2026.
          </div>
          <div className="events-row">
            <Link href="/events" className="event-card">
              <div className="date-block">
                <div className="day">22</div>
                <div className="month-year">
                  <strong>May 2026</strong>Friday &middot; 18:30
                </div>
              </div>
              <h3>Spring Members&apos; Reception</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", margin: 0 }}>
                Hosted at the Royal Over-Seas League — drinks, dinner and a
                fireside conversation with a visiting LBS faculty member.
              </p>
              <div className="where">Royal Over-Seas League, London SW1</div>
              <div className="rsvp">
                RSVP <span>→</span>
              </div>
            </Link>
            <Link href="/events" className="event-card">
              <div className="date-block">
                <div className="day">14</div>
                <div className="month-year">
                  <strong>June 2026</strong>Sunday &middot; 12:00
                </div>
              </div>
              <h3>Family Picnic, Hyde Park</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", margin: 0 }}>
                An informal afternoon for members, partners and children. Light
                catering provided. RSVP appreciated for headcount.
              </p>
              <div className="where">Hyde Park, Speakers&apos; Corner area</div>
              <div className="rsvp">
                RSVP <span>→</span>
              </div>
            </Link>
            <Link href="/events" className="event-card">
              <div className="date-block">
                <div className="day">09</div>
                <div className="month-year">
                  <strong>July 2026</strong>Thursday &middot; 19:00
                </div>
              </div>
              <h3>UK Chapter AGM &amp; Address</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--ink-soft)", margin: 0 }}>
                Annual General Meeting, election of officers, and the
                President&apos;s address on the year ahead. Members only.
              </p>
              <div className="where">The Law Society, Chancery Lane</div>
              <div className="rsvp">
                RSVP <span>→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* AFFILIATION QUOTE */}
      <section className="affiliation" id="parent">
        <div className="inner">
          <img
            src="/assets/lbs-logo.png"
            alt="Lagos Business School"
            className="lbs-mark"
          />
          <blockquote>
            &quot;The Association is not a social organisation. It exists to support
            the aims and objectives of Lagos Business School.&quot;
          </blockquote>
          <cite>— LBSAA, Parent Body Charter</cite>
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="section news-block" id="news">
        <div className="container">
          <div className="preview-head">
            <div>
              <div className="eyebrow">From the Chapter</div>
              <h2>Latest news.</h2>
            </div>
            <div className="right">
              <Link href="/news" className="view-all">
                All news &rarr;
              </Link>
            </div>
          </div>
          <div className="sample-strip" style={{ marginBottom: 40 }}>
            <strong>Sample stories:</strong> these illustrate the kinds of
            pieces the Chapter will publish. Real news will replace them at launch.
          </div>
          <div className="news-row">
            <Link href="/news" className="card">
              <div className="card-image photo" data-label="EVENT PHOTO"></div>
              <div className="card-body">
                <span className="tag">Chapter News</span>
                <h3>Inaugural reception draws ninety alumni to Westminster</h3>
                <p>
                  Members from across the UK gathered for the chapter&apos;s first
                  formal reception — a milestone evening with addresses from the
                  President and a representative of the parent body.
                </p>
                <div className="meta">
                  <span>Nkem Joseph-Palmer</span>
                  <span className="sep">&middot;</span>
                  <span>14 April 2026</span>
                </div>
              </div>
            </Link>
            <Link href="/news" className="card">
              <div className="card-image photo" data-label="MEMBER PORTRAIT"></div>
              <div className="card-body">
                <span className="tag">Member Spotlight</span>
                <h3>
                  From Lagos to London: a conversation with Adaeze Okafor (MBA
                  &apos;15)
                </h3>
                <p>
                  The Chapter member and head of strategy at a FTSE 250 firm
                  reflects on building a career in Britain while staying tethered
                  to the LBS network at home.
                </p>
                <div className="meta">
                  <span>Editorial</span>
                  <span className="sep">&middot;</span>
                  <span>02 April 2026</span>
                </div>
              </div>
            </Link>
            <Link href="/news" className="card">
              <div className="card-image photo" data-label="PARTNERSHIP"></div>
              <div className="card-body">
                <span className="tag">Partnerships</span>
                <h3>UK Chapter joins the Commonwealth Business Forum as observer</h3>
                <p>
                  An observer seat secured for the 2026 forum gives members a
                  route into one of Britain&apos;s most active diaspora business
                  networks.
                </p>
                <div className="meta">
                  <span>Stella, President</span>
                  <span className="sep">&middot;</span>
                  <span>20 March 2026</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* BECOME A MEMBER CTA */}
      <section className="cta-band" id="membership">
        <div className="inner">
          <div className="eyebrow">Membership</div>
          <h2>
            Join the <em>United Kingdom Chapter</em>.
          </h2>
          <p>
            Open to MBA graduates, Executive Education alumni and full-time faculty
            of Lagos Business School, resident in the United Kingdom. Application
            takes a few minutes.
          </p>
          <Link href="/membership#apply" className="btn btn-ghost">
            Begin application <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
