/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer className="container-fluid py-4 text-center">
      <div className="d-flex flex-column align-items-center gap-2">
        <img
          src="/logo192.png"
          alt="Logo"
          width="200"
          height="200"
          className="d-inline-block"
        />
        <span className="mb-0 lh-1" style={{ color: "#B98A45" }}>
          אקוורל גלריה למסגור תמונות
        </span>
      </div>
      <div className="footerLinksWrap d-flex flex-wrap justify-content-center gap-4 mt-4">
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
          תעקבו אחרינו
        </a>

        <a
          className="mb-0 lh-1 text-decoration-none nav-hover-link"
          href="#workingHoursSection"
        >
          שעות פעילות
        </a>

        <a
          className="mb-0 lh-1 text-decoration-none nav-hover-link"
          href="#locationSection"
        >
          המיקום שלנו
        </a>

        <a
          className="mb-0 lh-1 text-decoration-none nav-hover-link"
          href="#CcontactusSection"
        >
          צרו קשר
        </a>

        <a
          className="mb-0 lh-1 text-decoration-none nav-hover-link"
          href="#faqSection"
        >
          שאלות נפוצות
        </a>
      </div>
      <div className="mt-4">
        <p>
          אקוורל גלריה למסגור תמונות - כל הזכויות שמורות 2026 © -
          <a
            href="https://github.com/Evenchen21"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none darkPulseLink"
          >
            <span> </span>DarkPulse
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
