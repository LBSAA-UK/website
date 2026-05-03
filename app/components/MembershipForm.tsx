"use client";

import { useActionState, useEffect } from "react";
import { submitMembershipForm } from "../actions";
import Link from "next/link";

const initialState = {
  success: false,
  message: "",
};

export default function MembershipForm() {
  const [state, formAction, isPending] = useActionState(submitMembershipForm, initialState);

  useEffect(() => {
    if (state.success) {
      const el = document.getElementById("applyFormBlock");
      if (el) {
        window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
      }
    }
  }, [state.success]);

  return (
    <div className="apply-form" id="applyFormBlock">
      {state.success ? (
        <div className="form-success show" id="successMsg" style={{ display: 'block' }}>
          <div className="seal">✓</div>
          <h3>Application received.</h3>
          <p>
            Thank you. The Secretary will be in touch within ten working days. A
            copy of your application has been sent to the email address you
            provided.
          </p>
        </div>
      ) : (
        <form action={formAction}>
          <h3>Membership application</h3>
          <div className="form-sub">
            All fields are required unless marked optional.
          </div>

          <div className="field-row">
            <div className="field">
              <label>First name</label>
              <input type="text" name="firstName" required disabled={isPending} />
            </div>
            <div className="field">
              <label>Surname</label>
              <input type="text" name="lastName" required disabled={isPending} />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>Email address</label>
              <input type="email" name="email" required disabled={isPending} />
            </div>
            <div className="field">
              <label>Mobile (optional)</label>
              <input type="tel" name="mobile" disabled={isPending} />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>LBS programme</label>
              <select name="programme" required disabled={isPending}>
                <option value="">Select…</option>
                <option>Full-time MBA</option>
                <option>Modular MBA</option>
                <option>Executive MBA</option>
                <option>Senior Management Programme</option>
                <option>Advanced Management Programme</option>
                <option>Chief Executive Programme</option>
                <option>Faculty</option>
                <option>Other Executive Education</option>
              </select>
            </div>
            <div className="field">
              <label>Year of graduation</label>
              <input
                type="number"
                name="graduationYear"
                min="1990"
                max="2026"
                placeholder="e.g. 2015"
                required
                disabled={isPending}
              />
            </div>
          </div>
          <div className="field">
            <label>Current employer &amp; role</label>
            <input
              type="text"
              name="employerRole"
              placeholder="e.g. Head of Strategy, FTSE 250 firm"
              required
              disabled={isPending}
            />
          </div>
          <div className="field-row">
            <div className="field">
              <label>UK city of residence</label>
              <input
                type="text"
                name="ukCity"
                placeholder="London, Manchester…"
                required
                disabled={isPending}
              />
            </div>
            <div className="field">
              <label>How did you hear about us?</label>
              <select name="howDidYouHear" required disabled={isPending}>
                <option value="">Select…</option>
                <option>Parent LBSAA / Lagos</option>
                <option>Existing UK Chapter member</option>
                <option>LinkedIn</option>
                <option>Search</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label>Anything else? (optional)</label>
            <textarea
              name="additionalInfo"
              placeholder="If there is anything specific you would like the Exco to know."
              disabled={isPending}
            ></textarea>
          </div>

          <label className="checkbox">
            <input type="checkbox" required disabled={isPending} />
            <span>
              I consent to the United Kingdom Chapter holding the personal data
              above for the purpose of administering my membership, in accordance
              with the <Link href="/privacy">privacy policy</Link>. I understand I may
              withdraw consent at any time.
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
            {isPending ? "Submitting..." : "Submit application"} <span className="arrow">→</span>
          </button>
        </form>
      )}
    </div>
  );
}
