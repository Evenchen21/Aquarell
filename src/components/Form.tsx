import React from "react";

interface FormProps {}

const Form: React.FunctionComponent<FormProps> = () => {
  return (
    <section id="CcontactusSection" className="contactFormSection">
      <div className="contactFormShell">
        <h2 className="contactFormTitle">צרו קשר</h2>

        <form
          className="contactForm"
          action="https://formspree.io/f/xgojqozz"
          method="POST"
        >
          <label
            htmlFor="name"
            className="d-inline-flex align-items-center gap-2"
          >
            <i className="fa-regular fa-id-card" aria-hidden="true"></i>
            שם מלא
          </label>
          <input id="name" type="text" name="name" placeholder="הקלד את שמך" />

          <label
            htmlFor="email"
            className="d-inline-flex align-items-center gap-2"
          >
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            אימייל
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="name@example.com"
          />

          <label
            htmlFor="phone"
            className="d-inline-flex align-items-center gap-2"
          >
            <i className="fa-solid fa-phone" aria-hidden="true"></i>
            טלפון
          </label>
          <input id="phone" type="tel" name="phone" placeholder="05x-xxxxxxx" />

          <label
            htmlFor="message"
            className="d-inline-flex align-items-center gap-2"
          >
            <i className="fa-solid fa-pencil" aria-hidden="true"></i>
            הודעה
          </label>
          <textarea id="message" name="message" placeholder="כתוב לנו כאן..." />

          <button type="submit">שלח</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
