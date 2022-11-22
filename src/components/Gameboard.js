import "./Gameboard.css";
import { useState, useRef } from "react";
// import meauAudio from "audio/meau.mp3";

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
  const meau = useRef();
  const win = useRef();
  const clickHandler = (e) => {
    if (!e.target.classList.contains("backColor")) return;
    e.target.classList.remove("backColor");
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

      if (targetOfCard.target1.target.className === card2.className) {
        targetOfCard.target1.target.classList.remove("backColor");
        card2.classList.remove("backColor");
        setRightAnswer((prev) => prev + 1);
        meau.current.play();
      } else {
        setTimeout(() => {
          targetOfCard.target1.target.classList.add("backColor");
          card2.classList.add("backColor");
        }, 1000);
        setWrongAnswer((prev) => prev + 1);
      }
      props.loading((prev) => !prev);
      setTimeout(() => {
        setCardMatch((prev) => {
          return { card1Status: null, card2Status: null };
        });
      }, 500);
      props.loading((prev) => !prev);
    }
  };
  return (
    <div className="Board">
      {rightAnswer === props.randomCards.length / 2 && (
        <>
          <img
            style={{ width: "350px", margin: "auto" }}
            src="images/done.png"
            alt="done"
          ></img>
          <audio autoPlay ref={win} src="/audio/win.mp3"></audio>
        </>
      )}
      <h4>wrong answers :{wrongAnswer}</h4>

      <audio ref={meau} src="/audio/meau.mp3"></audio>

      {rightAnswer !== props.randomCards.length / 2 && (
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
      )}
    </div>
  );
}
