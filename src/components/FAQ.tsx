interface FAQProps {}

const FAQ: React.FunctionComponent<FAQProps> = () => {
  return (
    <section id="faqSection" className="faqSection" aria-label="שאלות נפוצות">
      <div className="faqShell">
        <h2 className="faqTitle">
          שאלות נפוצות
          <i
            className="fa-regular fa-circle-question faqTitleIcon"
            aria-hidden="true"
          ></i>
        </h2>
        <div
          className="accordion accordion-flush faqAccordion"
          id="accordionExample"
        >
          <div className="accordion-item faqItem">
            <h2 className="accordion-header faqHeader">
              <button
                className="accordion-button faqButton"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                היכן ניתן למצוא אותנו?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show faqCollapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body faqBody">
                <strong>
                  אנחנו נמצאים ברחוב א.ד גורדון 3 נתניה, ניתן להגיע אלינו בקלות
                  ברכב או בתחבורה ציבורית. יש חניה זמינה בסביבה.
                </strong>
              </div>
            </div>
          </div>

          <div className="accordion-item faqItem">
            <h2 className="accordion-header faqHeader">
              <button
                className="accordion-button collapsed faqButton"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                אילו שירותים אקוורל מציעה?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse faqCollapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body faqBody">
                <strong>
                  אקוורל מציעה מגוון שירותים בתחום המסגור והגלריה.
                </strong>{" "}
                אנו מספקים מסגור מקצועי לתמונות, ציורים ואמנות, וכן מציעים
                שירותי ייעוץ והכוונה בבחירת המסגרת המתאימה ביותר לכל יצירה.
                בנוסף, אנו מציעים שירותי תיקון ושימור יצירות אמנות.
              </div>
            </div>
          </div>

          <div className="accordion-item faqItem">
            <h2 className="accordion-header faqHeader">
              <button
                className="accordion-button collapsed faqButton"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                האם ניתן להזמין מסגור במידה אישית?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse faqCollapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body faqBody">
                <strong>
                  כן. אנו מתאימים מסגרות לפי מידה אישית לכל תמונה, יצירה, פוסטר
                  או מראה, כדי לקבל התאמה מדויקת לחלל ולסגנון.
                </strong>
              </div>
            </div>
          </div>

          <div className="accordion-item faqItem">
            <h2 className="accordion-header faqHeader">
              <button
                className="accordion-button collapsed faqButton"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                תוך כמה זמן ההזמנה מוכנה?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse faqCollapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body faqBody">
                <strong>
                  זמן ההכנה משתנה לפי סוג המסגור והעומס בחנות, אבל לרוב ניתן
                  לקבל הערכת זמן מדויקת כבר בעת ההזמנה.
                </strong>
              </div>
            </div>
          </div>

          <div className="accordion-item faqItem">
            <h2 className="accordion-header faqHeader">
              <button
                className="accordion-button collapsed faqButton"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                אילו פריטים אפשר למסגר אצלכם?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse faqCollapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body faqBody">
                <strong>
                  אפשר למסגר תמונות, ציורים, פוסטרים, תעודות, מראות, עבודות
                  אמנות ועוד, בהתאם למבנה ולסוג החומר.
                </strong>
              </div>
            </div>
          </div>

          <div className="accordion-item faqItem">
            <h2 className="accordion-header faqHeader">
              <button
                className="accordion-button collapsed faqButton"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                האם אפשר לקבל ייעוץ לפני בחירת מסגרת?
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse faqCollapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body faqBody">
                <strong>
                  בהחלט. אנחנו מסייעים בבחירת מסגרת, צבע, עובי וסגנון כך שיתאימו
                  במיוחד בשבילכם.
                </strong>
              </div>
            </div>
          </div>

          <div className="accordion-item faqItem">
            <h2 className="accordion-header faqHeader">
              <button
                className="accordion-button collapsed faqButton"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                אפשרויות תשלום
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse faqCollapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body faqBody">
                <strong>
                  אנחנו לא מקבלים תשלומים בכרטיסי אשראי, אבל ניתן לבצע העברה
                  בנקאית או באפלקציות באמצעות פייבוקס, ביט, צ'קים ומזומן.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
