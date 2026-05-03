"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem("lbsaa-cookie-choice");
      if (!choice) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 350);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // localStorage blocked
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("lbsaa-cookie-choice", "all");
    setIsVisible(false);
  };

  const handleNecessary = () => {
    localStorage.setItem("lbsaa-cookie-choice", "necessary");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="cookie-banner"
      id="cookieBanner"
      role="dialog"
      aria-labelledby="cookieTitle"
    >
      <p>
        <strong id="cookieTitle">Cookies on this site.</strong>
        <br />
        We use a small number of cookies to make this site work and to
        understand how it is used. We do not use marketing cookies. Read our{" "}
        <Link href="/cookies">cookies policy</Link>.
      </p>
      <div className="actions">
        <button className="primary" onClick={handleAccept}>
          Accept
        </button>
        <button onClick={handleNecessary}>Necessary only</button>
      </div>
    </div>
  );
}
