/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer className="container-fluid py-4 text-center">
      <div className="d-flex flex-column align-items-center gap-3">
        <img
          src="/logo192.png"
          alt="Logo"
          width="130"
          height="130"
          className="d-inline-block"
        />
        <span className="mb-0 lh-1" style={{ color: "#B98A45" }}>
          אקוורל גלריה למסגור תמונות
        </span>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
        <a
          className="mb-0 lh-1 text-decoration-none nav-hover-link"
          href="#homeImage"
        >
          בית
        </a>

        <a
          className="mb-0 lh-1 text-decoration-none nav-hover-link"
          href="#ourService"
        >
          שירות
        </a>

        <a
          className="mb-0 lh-1 text-decoration-none nav-hover-link"
          href="#SocialMediaFollowUs"
        >
          אודות
        </a>

        <a
          className="mb-0 lh-1 text-decoration-none nav-hover-link"
          href="#CcontactusSection"
        >
          צרו קשר
        </a>
      </div>
      <div className="mt-4">
        <p>© 2026 אקוורל גלריה למסגור תמונות. כל הזכויות שמורות- DarkPulse</p>
      </div>
    </footer>
  );
};

export default Footer;
