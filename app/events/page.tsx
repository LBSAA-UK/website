import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LBSAA United Kingdom Chapter | Events',
};

export default function Events() {
  return (
    <>


<section className="page-hero">
  <div className="inner">
    <div className="crumb"><a href="/index">Home</a> &nbsp;/&nbsp; Events</div>
    <h1>Convenings of the United Kingdom Chapter.</h1>
    <p className="lede">Three to five formal events each year, with smaller members' gatherings between. Most are held in London; we are extending to Manchester and Edinburgh as the membership grows.</p>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="filter-bar">
      <div className="filter-tabs">
        <button className="active">Upcoming</button>
        <button>Past Events</button>
        <button>Parent Body</button>
      </div>
      <div className="right">
        <select>
          <option>All categories</option>
          <option>Reception</option>
          <option>Faculty visit</option>
          <option>AGM</option>
          <option>Social</option>
        </select>
        <a href="#" className="ics">Download Calendar (.ics) ↓</a>
      </div>
    </div>

    {/*  Featured upcoming event  */}
    <article className="featured">
      <div className="photo" data-label="ROYAL OVER-SEAS LEAGUE"></div>
      <div className="body">
        <div className="featured-tag">Featured · Members' Reception</div>
        <h2>Spring Members' Reception with Prof. A. Adeyemi</h2>
        <p>An evening of conversation, drinks and a fireside discussion with a visiting member of the LBS faculty on the future of public-private leadership in West Africa and the diaspora. Open to members and one guest each.</p>
        <dl className="when-where">
          <dt>When</dt><dd>Friday, 22 May 2026 · 18:30 — 22:00</dd>
          <dt>Where</dt><dd>Royal Over-Seas League, Park Place, London SW1A 1LR</dd>
          <dt>Dress</dt><dd>Lounge suit / equivalent</dd>
          <dt>Capacity</dt><dd>120 · 78 confirmed</dd>
        </dl>
        <div className="actions">
          <a href="#" className="btn">RSVP <span className="arrow">→</span></a>
          <a href="#" className="btn btn-outline">Add to calendar</a>
        </div>
      </div>
    </article>

    {/*  Upcoming list  */}
    <div className="eyebrow">More upcoming</div>
    <h2 style={{ "marginBottom": "32px" }}>Through the year.</h2>
    <div className="events-list">
      <a href="#" className="event-row">
        <div className="e-date"><div className="d">14</div><div className="my"><strong>Jun</strong>2026</div></div>
        <div className="e-title">
          <div className="e-tag">Family · Social</div>
          <h3>Summer Family Picnic, Hyde Park</h3>
          <p>An informal afternoon for members, partners and children. Light catering provided.</p>
        </div>
        <div className="e-where"><strong>Hyde Park</strong>Speakers' Corner area</div>
        <div className="e-cta"><div className="pill open">Open</div><div>RSVP →</div></div>
      </a>
      <a href="#" className="event-row">
        <div className="e-date"><div className="d">09</div><div className="my"><strong>Jul</strong>2026</div></div>
        <div className="e-title">
          <div className="e-tag">Members only · AGM</div>
          <h3>UK Chapter Annual General Meeting &amp; President's Address</h3>
          <p>AGM, election of officers, and the President's address on the year ahead. Members only.</p>
        </div>
        <div className="e-where"><strong>The Law Society</strong>113 Chancery Lane, WC2A</div>
        <div className="e-cta"><div className="pill open">Members</div><div>RSVP →</div></div>
      </a>
      <a href="#" className="event-row">
        <div className="e-date"><div className="d">18</div><div className="my"><strong>Sep</strong>2026</div></div>
        <div className="e-title">
          <div className="e-tag">Faculty Visit · Manchester</div>
          <h3>Northern Members' Dinner with Dean's Office</h3>
          <p>The first formal Manchester convening of the Chapter, hosted in partnership with Manchester-based members.</p>
        </div>
        <div className="e-where"><strong>The Midland</strong>Peter Street, Manchester</div>
        <div className="e-cta"><div className="pill open">Open</div><div>RSVP →</div></div>
      </a>
      <a href="#" className="event-row">
        <div className="e-date"><div className="d">14</div><div className="my"><strong>Nov</strong>2026</div></div>
        <div className="e-title">
          <div className="e-tag">Parent Body · Lagos</div>
          <h3>LBSAA Annual Conference (Lagos) — UK delegation</h3>
          <p>The parent association's flagship convening. The UK Chapter coordinates a delegation each year.</p>
        </div>
        <div className="e-where"><strong>Lagos</strong>LBS Campus</div>
        <div className="e-cta"><div className="pill">External</div><div>Details →</div></div>
      </a>
      <a href="#" className="event-row">
        <div className="e-date"><div className="d">06</div><div className="my"><strong>Dec</strong>2026</div></div>
        <div className="e-title">
          <div className="e-tag">Reception · Black tie</div>
          <h3>End-of-year Reception, City of London</h3>
          <p>The Chapter's end-of-year reception. Black tie. Members and one guest each.</p>
        </div>
        <div className="e-where"><strong>Drapers' Hall</strong>Throgmorton Avenue, EC2N</div>
        <div className="e-cta"><div className="pill full">Waitlist</div><div>Join list →</div></div>
      </a>
    </div>
  </div>
</section>

{/*  PAST EVENTS  */}
<section className="section past">
  <div className="container">
    <div style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "end", "flexWrap": "wrap", "gap": "24px", "marginBottom": "8px" }}>
      <div>
        <div className="eyebrow">Past Events</div>
        <h2>The Chapter, in pictures.</h2>
      </div>
      <a href="#" style={{ "fontSize": "0.78rem", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--navy)", "borderBottom": "1px solid var(--gold)", "paddingBottom": "4px", "fontWeight": "600" }}>Full archive →</a>
    </div>
    <div className="past-grid">
      <article className="past-card">
        <div className="photo" data-label="WESTMINSTER, APR 2026"></div>
        <div className="body">
          <div className="when">14 April 2026 · London</div>
          <h3>Inaugural members' reception, Westminster</h3>
          <p style={{ "margin": "0", "fontSize": "0.9rem" }}>Ninety alumni gathered for the chapter's first formal reception.</p>
          <div className="gallery">View gallery (24 photos) →</div>
        </div>
      </article>
      <article className="past-card">
        <div className="photo" data-label="MAYFAIR, FEB 2026"></div>
        <div className="body">
          <div className="when">22 February 2026 · London</div>
          <h3>New Year alumni breakfast</h3>
          <p style={{ "margin": "0", "fontSize": "0.9rem" }}>A working breakfast on the year's strategic priorities for the chapter.</p>
          <div className="gallery">View gallery (12 photos) →</div>
        </div>
      </article>
      <article className="past-card">
        <div className="photo" data-label="CITY OF LONDON, DEC 2025"></div>
        <div className="body">
          <div className="when">07 December 2025 · London</div>
          <h3>End-of-year drinks, the City</h3>
          <p style={{ "margin": "0", "fontSize": "0.9rem" }}>An informal close to the founding year of the chapter.</p>
          <div className="gallery">View gallery (18 photos) →</div>
        </div>
      </article>
    </div>
  </div>
</section>


    </>
  );
}
