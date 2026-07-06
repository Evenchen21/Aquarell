import React from "react";

interface SocialProps {}

const Social: React.FunctionComponent<SocialProps> = () => {
  return (
    <section
      id="SocialMediaFollowUs"
      className="socialSection"
      aria-label="קישורי מדיה חברתית"
    >
      <div className="socialShell">
        <h2 className="socialTitle"> תעקבו אחרינו</h2>
        <div className="socialGrid">
          <a
            className="socialLink"
            href="https://easy.co.il/page/3576733"
            target="_blank"
            rel="noreferrer"
            aria-label="איזי"
          >
            <i className="fa-solid fa-bolt" aria-hidden="true"></i>
            <span>איזי</span>
          </a>

          <a
            className="socialLink"
            href="https://www.facebook.com/profile.php?id=100083587805386"
            target="_blank"
            rel="noreferrer"
            aria-label="פייסבוק"
          >
            <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            <span>פייסבוק</span>
          </a>

          <a
            className="socialLink"
            href="https://www.instagram.com/avnerevenchen/"
            target="_blank"
            rel="noreferrer"
            aria-label="אינסטגרם"
          >
            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            <span>אינסטגרם</span>
          </a>

          <a
            className="socialLink"
            href="https://www.google.com/maps/place/אקוורל%E2%80%AD/@32.329749,34.8603829,17z/data=!4m8!3m7!1s0x151d6aabe9da8b95:0x6a673dfcd81a106b!8m2!3d32.329749!4d34.857808!9m1!1b1!16s%2Fg%2F11h51k0558?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D#:~:text=כתיבת-,ביקורת"
            target="_blank"
            rel="noreferrer"
            aria-label="ביקורות גוגל"
          >
            <i className="fa-brands fa-google" aria-hidden="true"></i>
            <span>ביקורות גוגל</span>
          </a>

          <a
            className="socialLink"
            href="https://wa.me/972503111203?text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%A0%D7%A8,%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%99%D7%A8%D7%95%D7%AA"
            target="_blank"
            rel="noreferrer"
            aria-label="ווצאפ"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            <span>ווצאפ</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
