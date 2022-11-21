import "./Gameboard.css";
import { useState } from "react";
export function Gameboard(props) {
  const [cardMatch, setCardMatch] = useState({
    card1Status: null,
    card2Status: null,
  });
  const [targetOfCard, setTargetCard] = useState({
    target1: null,
  });
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);

  const clickHandler = (e) => {
    // let card1;
    let card2;
    if (!cardMatch.card1Status) {
      setCardMatch((prev) => {
        return { ...prev, card1Status: e.target.className };
      });
      setTargetCard((prev) => {
        return { ...prev, target1: e };
      });
    } else if (!cardMatch.card2Status) {
      setCardMatch((prev) => {
        return { ...prev, card2Status: e.target.className };
      });
      card2 = e.target;
      console.log(targetOfCard.target1.target.className);
      console.log(card2.className);
      if (targetOfCard.target1.target.className === card2.className) {
        targetOfCard.target1.target.classList.remove("backColor");
        card2.classList.remove("backColor");
        setRightAnswer((prev) => prev + 1);
      } else {
        setWrongAnswer((prev) => prev + 1);
      }
      setTimeout(() => {
        setCardMatch((prev) => {
          return { card1Status: null, card2Status: null };
        });
      }, 1000);
    }
  };
  return (
    <div className="Board">
      <h2>
        {cardMatch.card1Status}, {cardMatch.card2Status}
      </h2>
      {cardMatch.card1Status === cardMatch.card2Status &&
        cardMatch.card1Status !== null && <h2>match</h2>}
      <h1>{wrongAnswer}</h1>
      {rightAnswer === props.randomCards.length / 2 && <h1>Win</h1>}
      <h1>Memory Card Game</h1>
      <div className="card-grid">
        {props.randomCards.map((card, index) => (
          <div key={`card${index}`}>
            <div
              onClick={(e) => {
                clickHandler(e);
              }}
              className={`${card} backColor`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
