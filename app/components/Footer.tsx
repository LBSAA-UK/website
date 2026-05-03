"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { subscribeNewsletter } from "../actions";

const initialState = {
  success: false,
  message: "",
};

export default function Footer() {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, initialState);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.success) {
      setSubmitted(true);
    }
  }, [state.success]);

  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="wordmark wordmark-footer">
              <img src="/assets/lbsaa-icon.png" alt="" className="wordmark-icon" />
              <div className="text">
                <div className="top">LBSAA</div>
                <div className="sub">United Kingdom Chapter</div>
              </div>
            </div>
            <p>
              The United Kingdom regional chapter of the Lagos Business School
              Alumni Association &mdash; promoting, supporting and serving in
              good standing with our parent body in Lagos.
            </p>
            <form className="newsletter" id="newsletterForm" action={formAction}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Newsletter email"
                required
                disabled={submitted || isPending}
              />
              <button type="submit" disabled={submitted || isPending}>
                {submitted ? "Noted" : isPending ? "Wait" : "Subscribe"}
              </button>
            </form>
            <div className="form-note">
              {submitted
                ? "Thank you. We've recorded your interest and will write back once the newsletter is set up."
                : "Newsletter delivery is in setup. We'll write back to confirm before adding you."}
              {state.message && !state.success && (
                <div style={{ color: '#ffb3b3', marginTop: '4px' }}>{state.message}</div>
              )}
            </div>
          </div>
          <div className="footer-col">
            <h5>Chapter</h5>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/membership">Membership</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Governance</h5>
            <ul>
              <li>
                <Link href="/about#exco">Executive Committee</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookies">Cookies Policy</Link>
              </li>
              <li>
                <span className="muted">Constitution &mdash; in draft</span>
              </li>
              <li>
                <span className="muted">
                  Annual Report &mdash; first edition due 2026
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Parent Body</h5>
            <ul>
              <li>
                <a href="https://lbs.edu.ng/alumni/" target="_blank" rel="external noopener noreferrer">
                  LBSAA (Lagos)
                </a>
              </li>
              <li>
                <a href="https://lbs.edu.ng/" target="_blank" rel="external noopener noreferrer">
                  Lagos Business School
                </a>
              </li>
              <li>
                <a href="https://pau.edu.ng/" target="_blank" rel="external noopener noreferrer">
                  Pan-Atlantic University
                </a>
              </li>
              <li>
                <span className="muted">Footprints Magazine</span>
              </li>
              <li>
                <span className="muted">Littleprints Newsletter</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            &copy; 2026 LBSAA United Kingdom Chapter. Unincorporated Association.
            CIO transition planned.
          </div>
          <div>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
            <a href="mailto:secretary@lbsaauk.org">secretary@lbsaauk.org</a>
          </div>
        </div>
        <div className="prelaunch-note" role="note">
          <strong>Pre-launch:</strong> this site is being prepared for the
          Chapter. Some content is illustrative pending Exco confirmation.
        </div>
      </div>
    </footer>
  );
}
