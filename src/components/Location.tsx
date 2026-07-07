import React from "react";

interface LocationProps {
  storeAddress?: string;
}

const Location: React.FunctionComponent<LocationProps> = ({
  storeAddress = "רחוב הדוגמה 123, עיר הדוגמה, ישראל",
}) => {
  const encodedAddress = encodeURIComponent(storeAddress);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const wazeDirectionsUrl = `https://www.waze.com/ul?q=${encodedAddress}&navigate=yes`;

  return (
    <section
      id="locationSection"
      className="locationSection"
      aria-label="מיקום החנות"
    >
      <div className="locationShell">
        <h2 className="locationTitle">
          המיקום שלנו
          <i
            className="fa-solid fa-location-dot locationTitleIcon"
            aria-hidden="true"
          ></i>
        </h2>
        <p className="locationAddress">{storeAddress}</p>
        <div className="locationDirections">
          <a
            href={wazeDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="locationDirectionsLink"
          >
            <i className="fa-brands fa-waze" aria-hidden="true"></i>
            מסלול הגעה Waze
          </a>
          <a
            href={googleDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="locationDirectionsLink"
          >
            <i
              className="fa-solid fa-map-location-dot mb-10"
              aria-hidden="true"
            ></i>
            מסלול הגעה Google Maps
          </a>
        </div>
        <div className="locationMapWrap">
          <iframe
            title="מפת מיקום החנות"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
