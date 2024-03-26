import "./App.css";
import { useState } from "react";
import { randomizedYoutubers } from "./helpers/youtubers";
import YouTuberCard from "./components/YoutuberCard";
import ResetGame from "./components/ResetGame";
import YourChoice from "./components/YourChoice";
import Title from "./components/Title";
import HowtoPlay from "./components/HowtoPlay";

const Youtubers = randomizedYoutubers;

function App() {
  const [clearOverlay, setClearOverlay] = useState(false);
  const [yourChoice, setYourChoice] = useState({ name: "", image: "" });
  const [toggleHowto, setToggleHowto] = useState(false);

  const resetGame = () => {
    setClearOverlay((prev) => !prev); // this is the way to clear cross overlay, when state changes it fires the useEffect in YoutuberCard
    setYourChoice({ name: "", image: "" });
  };

  return (
    <>
      <Title />
      <div className="game">
        <YourChoice yourChoice={yourChoice} />
        <div className="sub-game">
          <div className="game-board">
            {Youtubers.map((youtuber) => (
              <YouTuberCard
                key={youtuber.id}
                name={youtuber.name}
                image={youtuber.image}
                clearOverlay={clearOverlay}
                yourChoice={yourChoice}
                setYourChoice={setYourChoice}
              />
            ))}
          </div>
          <ResetGame
            resetGame={resetGame}
            toggleHowto={toggleHowto}
            setToggleHowto={setToggleHowto}
          />
        </div>
        {toggleHowto && <HowtoPlay />}
      </div>
    </>
  );
}

export default App;
