import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LBSAA United Kingdom Chapter | News',
};

export default function News() {
  return (
    <>


<section className="page-hero">
  <div className="inner">
    <div className="crumb"><a href="/index">Home</a> &nbsp;/&nbsp; News</div>
    <h1>News from the Chapter.</h1>
    <p className="lede">Chapter announcements, member spotlights, partnership notes and news from the parent body in Lagos.</p>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="news-filter">
      <div className="cat-tabs">
        <button className="active">All</button>
        <button>Chapter News</button>
        <button>Member Spotlights</button>
        <button>Partnerships</button>
        <button>Past Events</button>
        <button>Parent Body</button>
      </div>
      <div className="news-search">
        <input type="search" placeholder="Search news…" />
        <button>↵</button>
      </div>
    </div>

    {/*  Lead story  */}
    <article className="lead">
      <div className="photo" data-label="WESTMINSTER RECEPTION, APR 2026"></div>
      <div className="body">
        <div className="tag">Lead · Chapter News</div>
        <h2>Inaugural reception draws ninety alumni to Westminster</h2>
        <p>Members from across the UK gathered last week for the chapter's first formal reception. The President spoke briefly on the year ahead; a representative of the parent body in Lagos delivered remarks by video.</p>
        <div className="meta"><strong>Nkem Joseph-Palmer</strong> · Secretary · 14 April 2026 · 4 min read</div>
      </div>
    </article>

    {/*  News grid  */}
    <div className="news-grid">
      <a href="#" className="card">
        <div className="card-image photo" data-label="MEMBER PORTRAIT"></div>
        <div className="card-body">
          <span className="tag">Member Spotlight</span>
          <h3>From Lagos to London: Adaeze Okafor (MBA '15)</h3>
          <p>Head of strategy at a FTSE 250 firm, on building a career in Britain while staying tethered to LBS.</p>
          <div className="meta"><span>Editorial</span><span className="sep">·</span><span>02 April 2026</span></div>
        </div>
      </a>
      <a href="#" className="card">
        <div className="card-image photo" data-label="COMMONWEALTH FORUM"></div>
        <div className="card-body">
          <span className="tag">Partnerships</span>
          <h3>UK Chapter joins the Commonwealth Business Forum as observer</h3>
          <p>Observer seat secured for 2026 gives members a route into one of Britain's most active diaspora networks.</p>
          <div className="meta"><span>Stella, President</span><span className="sep">·</span><span>20 March 2026</span></div>
        </div>
      </a>
      <a href="#" className="card">
        <div className="card-image photo" data-label="LAGOS CAMPUS"></div>
        <div className="card-body">
          <span className="tag">Parent Body</span>
          <h3>LBSAA announces 2026 Footprints editorial line-up</h3>
          <p>The parent body's flagship publication confirms its 2026 contributors, including two UK Chapter members.</p>
          <div className="meta"><span>From Lagos</span><span className="sep">·</span><span>14 March 2026</span></div>
        </div>
      </a>
      <a href="#" className="card">
        <div className="card-image photo" data-label="DRAPERS HALL"></div>
        <div className="card-body">
          <span className="tag">Past Events</span>
          <h3>End-of-year drinks: a closing note from the Chair</h3>
          <p>Stella reflects on the founding year of the chapter and what the membership has built together so far.</p>
          <div className="meta"><span>Stella, President</span><span className="sep">·</span><span>12 December 2025</span></div>
        </div>
      </a>
      <a href="#" className="card">
        <div className="card-image photo" data-label="MEMBER SPOTLIGHT"></div>
        <div className="card-body">
          <span className="tag">Member Spotlight</span>
          <h3>Three questions for Dr Tunde Adebayo (EMBA '08)</h3>
          <p>The healthcare investor on the diaspora capital question and what the UK Chapter could mean over a decade.</p>
          <div className="meta"><span>Editorial</span><span className="sep">·</span><span>28 November 2025</span></div>
        </div>
      </a>
      <a href="#" className="card">
        <div className="card-image photo" data-label="CONSTITUTION DRAFT"></div>
        <div className="card-body">
          <span className="tag">Chapter News</span>
          <h3>Draft constitution circulated for member comment</h3>
          <p>Members are invited to review the draft chapter constitution ahead of formal adoption at the AGM in July.</p>
          <div className="meta"><span>Nkem Joseph-Palmer</span><span className="sep">·</span><span>10 November 2025</span></div>
        </div>
      </a>
      <a href="#" className="card">
        <div className="card-image photo" data-label="CIO TRANSITION"></div>
        <div className="card-body">
          <span className="tag">Chapter News</span>
          <h3>Towards CIO status: an update from the Secretary</h3>
          <p>Where the Chapter stands on the planned transition to Charitable Incorporated Organisation status.</p>
          <div className="meta"><span>Nkem Joseph-Palmer</span><span className="sep">·</span><span>22 October 2025</span></div>
        </div>
      </a>
      <a href="#" className="card">
        <div className="card-image photo" data-label="LITTLEPRINTS"></div>
        <div className="card-body">
          <span className="tag">Parent Body</span>
          <h3>Littleprints October: a UK perspective</h3>
          <p>The Chapter contributes a UK column to the parent association's monthly Littleprints newsletter.</p>
          <div className="meta"><span>From Lagos</span><span className="sep">·</span><span>03 October 2025</span></div>
        </div>
      </a>
      <a href="#" className="card">
        <div className="card-image photo" data-label="MANCHESTER MEET"></div>
        <div className="card-body">
          <span className="tag">Chapter News</span>
          <h3>Manchester sub-chapter scoping: a first conversation</h3>
          <p>Twelve Manchester-based members met in September to discuss what a Northern sub-chapter could look like.</p>
          <div className="meta"><span>Editorial</span><span className="sep">·</span><span>18 September 2025</span></div>
        </div>
      </a>
    </div>

    <div className="pagination">
      <button>‹</button>
      <button className="current">1</button>
      <button>2</button>
      <button>3</button>
      <button>›</button>
    </div>
  </div>
</section>


    </>
  );
}
