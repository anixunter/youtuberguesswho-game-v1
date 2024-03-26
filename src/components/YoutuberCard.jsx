import { useEffect, useState } from "react";

const YouTuberCard = ({
  name,
  image,
  clearOverlay,
  yourChoice,
  setYourChoice,
}) => {
  const [crossed, setCrossed] = useState(false);

  useEffect(() => {
    setCrossed(false);
  }, [clearOverlay]); // this is the way to clear cross overlay

  const handleCardClick = (event) => {
    if (!yourChoice.name) {
      setYourChoice({ name: event.target.alt, image: event.target.src });
      return;
    }
    setCrossed((prev) => !prev);
  };

  return (
    <div className="youtuber-card" onClick={handleCardClick}>
      <img src={image} alt={name} />
      {crossed && (
        <div className="overlay">
          <img src="./cross.png" alt="crossed" />
        </div>
      )}
    </div>
  );
};

export default YouTuberCard;
