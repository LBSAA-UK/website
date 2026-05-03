"use client";

import { useActionState, useEffect } from "react";
import { submitContactForm } from "../actions";

const initialState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.success) {
      // Scroll smoothly to top of form when success happens
      const el = document.getElementById("contactFormBlock");
      if (el) {
        window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
      }
    }
  }, [state.success]);

  return (
    <div className="contact-form" id="contactFormBlock">
      {state.success ? (
        <div className="form-success show" id="successMsg" style={{ display: 'block' }}>
          <div className="seal">✓</div>
          <h3>Message sent.</h3>
          <p>
            Thank you. The Exco officer responsible for your subject area will
            be in touch within five working days.
          </p>
        </div>
      ) : (
        <form action={formAction}>
          <h3>Send a message</h3>
          <div className="form-sub">
            Your message will be routed to the relevant Exco officer based on
            the subject you select.
          </div>

          <div className="field-row">
            <div className="field">
              <label>Full name</label>
              <input type="text" name="fullName" required disabled={isPending} />
            </div>
            <div className="field">
              <label>Email address</label>
              <input type="email" name="email" required disabled={isPending} />
            </div>
          </div>
          <div className="field">
            <label>I am writing as</label>
            <select name="role" required disabled={isPending}>
              <option value="">Select…</option>
              <option>An LBS alumnus / alumna in the UK</option>
              <option>A prospective member (LBS alumnus visiting the UK)</option>
              <option>A prospective sponsor or partner</option>
              <option>Press / media</option>
              <option>The parent association in Lagos</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field">
            <label>Subject area (routes your message)</label>
            <select name="subjectArea" required disabled={isPending}>
              <option value="">Select…</option>
              <option>Membership question</option>
              <option>Event RSVP / question</option>
              <option>Governance / Secretary</option>
              <option>Partnership / sponsorship</option>
              <option>Press enquiry</option>
              <option>General enquiry</option>
            </select>
          </div>
          <div className="field">
            <label>Subject line</label>
            <input type="text" name="subjectLine" required disabled={isPending} />
          </div>
          <div className="field">
            <label>Your message</label>
            <textarea
              name="message"
              required
              disabled={isPending}
              placeholder="Please include any relevant context the Exco officer will need."
            ></textarea>
          </div>

          <label className="checkbox">
            <input type="checkbox" required disabled={isPending} />
            <span>
              I consent to the United Kingdom Chapter holding the personal data
              above for the purpose of responding to my enquiry, in accordance
              with the <a href="/privacy">privacy policy</a>.
            </span>
          </label>

          {state.message && !state.success && (
            <div style={{ color: 'red', fontSize: '0.85rem', marginBottom: '16px' }}>
              {state.message}
            </div>
          )}

          <button
            type="submit"
            className="btn"
            disabled={isPending}
            style={{ width: "100%", justifyContent: "center" }}
          >
            {isPending ? "Sending..." : "Send message"} <span className="arrow">→</span>
          </button>
        </form>
      )}
    </div>
  );
}
