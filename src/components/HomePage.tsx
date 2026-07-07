import React from "react";
import AnimatedStatNumber from "./animation";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  return (
    <>
      <div id="homeImage" className="container-fluid p-0 homeImage">
        <img
          src="/mainPhoto.png"
          className="main-hero-image"
          alt="MainPhoto Background"
        ></img>
      </div>
      <div>
        <div id="ourService" className="ourService">
          <h1 className="ourServiceTitle">
            השירות שלנו
            <i
              className="fa-regular fa-heart ourServiceTitleIcon"
              aria-hidden="true"
            ></i>
          </h1>
          <p className="ourServiceText">
            באקוורל אנו מאמינים שכל תמונה, יצירת אמנות או מראה ראויה למסגרת
            שתדגיש את יופייה ותשלים את החלל שבו היא נמצאת. אנו מתמחים במסגור
            תמונות בהתאמה אישית, מסגור יצירות אמנות, תמונות משפחתיות, פוסטרים,
            תעודות, מראות לפי מידה ועוד. אנו מציעים מגוון רחב של מסגרות בסגנונות
            קלאסיים ומודרניים, תוך שימוש בחומרי גלם איכותיים, גימור מוקפד ושירות
            אישי לכל לקוח. בנוסף, תוכלו למצוא אצלנו מבחר תמונות, הדפסי אמנות
            וציורי שמן, לצד פתרונות עיצוב המותאמים לבית, למשרד ולחללים מסחריים.
            המחויבות שלנו היא להעניק לכל לקוח ליווי מקצועי, אמינות, איכות ללא
            פשרות ותוצאה שתשמור על היצירה שלכם ותלווה אתכם לאורך שנים.
          </p>
          <table className="ourServiceTable" aria-label="נתוני ניסיון ושירות">
            <tbody>
              <tr>
                <td>
                  <AnimatedStatNumber
                    target={30}
                    formatter={(value) => `${value}+`}
                  />
                  <span className="ourServiceStatLabel">שנות ניסיון</span>
                </td>

                <td>
                  <AnimatedStatNumber
                    target={10}
                    formatter={(value) => `${value}/10`}
                  />
                  <span className="ourServiceStatLabel"> איכות שירות</span>
                </td>

                <td>
                  <AnimatedStatNumber
                    target={100}
                    formatter={(value) => `${value}%`}
                  />
                  <span className="ourServiceStatLabel">לקוחות מרוצים</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="PhotosSlide">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2500"
            data-bs-pause="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/photoFarmsWall.png"
                  className="d-block w-100"
                  alt="Aquarell photo 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/insideStore.png"
                  className="d-block w-100"
                  alt="Aquarell photo 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/forestPhoto.jpeg"
                  className="d-block w-100"
                  alt="Aquarell photo 3"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/photoWhite.png"
                  className="d-block w-100"
                  alt="Aquarell photo 4"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/lionsPhoto.jpeg"
                  className="d-block w-100"
                  alt="Aquarell photo 5"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/DarkFrame.png"
                  className="d-block w-100"
                  alt="Aquarell photo 6"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/abstractPhoto.png"
                  className="d-block w-100"
                  alt="Aquarell photo 7"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/seaPhoto.png"
                  className="d-block w-100"
                  alt="Aquarell photo 8"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/mainPhoto.png"
                  className="d-block w-100"
                  alt="Aquarell photo 9"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/AvnerTheOwner.png"
                  className="d-block w-100"
                  alt="Aquarell photo 10"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/lionsPhoto2.jpg"
                  className="d-block w-100"
                  alt="Aquarell photo 11"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
