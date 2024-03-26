const ResetGame = ({ resetGame, toggleHowto, setToggleHowto }) => {
  return (
    <div className="buttons">
      <div className="button" onClick={resetGame}>
        Reset
      </div>
      <div className="button" onClick={() => setToggleHowto(!toggleHowto)}>
        {toggleHowto ? "Hide" : "How to Play"}
      </div>
    </div>
  );
};

export default ResetGame;
