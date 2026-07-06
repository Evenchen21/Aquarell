import React from "react";

interface LocationProps {
  storeAddress?: string;
}

const Location: React.FunctionComponent<LocationProps> = ({
  storeAddress = "רחוב הדוגמה 123, עיר הדוגמה, ישראל",
}) => {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(storeAddress)}&output=embed`;

  return (
    <section className="locationSection" aria-label="מיקום החנות">
      <div className="locationShell">
        <h2 className="locationTitle">המיקום שלנו</h2>
        <p className="locationAddress">{storeAddress}</p>
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
