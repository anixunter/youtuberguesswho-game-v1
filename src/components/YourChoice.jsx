const YourChoice = ({ yourChoice }) => {
  return (
    <div className="your-choice">
      <img
        src={yourChoice.name ? yourChoice.image : "./yourchoice.jpg"}
        alt={yourChoice.name ? yourChoice.name : "yourchoice"}
      />
      <p>
        {yourChoice.name ? yourChoice.name.toUpperCase() : "Select Youtuber"}
      </p>
    </div>
  );
};

export default YourChoice;
