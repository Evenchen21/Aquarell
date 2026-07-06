import React from "react";

interface NavigationBarProps {}

const NavigationBar: React.FunctionComponent<NavigationBarProps> = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg site-navbar"
        style={{
          backgroundColor: "#3F2C22",
          borderBottom: "6px solid #6E5642",
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex align-items-center gap-3 m-0 text-decoration-none"
            href="#homeImage"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src="/logo192.png"
                alt="Logo"
                width="130"
                height="130"
                className="d-inline-block site-navbar-logo"
              />
              <span
                className="mb-0 lh-1 site-navbar-title"
                style={{ color: "#B98A45" }}
              >
                אקוורל גלריה למסגור תמונות
              </span>
            </div>
          </a>

          <button
            className="navbar-toggler site-navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbarLinks"
            aria-controls="mainNavbarLinks"
            aria-expanded="false"
            aria-label="פתיחת תפריט ניווט"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbarLinks">
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3 site-navbar-links">
              <a
                className="nav-link mb-0 lh-1 text-decoration-none nav-hover-link"
                href="#homeImage"
              >
                בית
              </a>

              <a
                className="nav-link mb-0 lh-1 text-decoration-none nav-hover-link"
                href="#ourService"
              >
                שירות
              </a>

              <a
                className="nav-link mb-0 lh-1 text-decoration-none nav-hover-link"
                href="#CcontactusSection"
              >
                צרו קשר
              </a>

              <a
                className="nav-link mb-0 lh-1 text-decoration-none nav-hover-link"
                href="#SocialMediaFollowUs"
              >
                אודות
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
