import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import WordDisplay from "../components/_wordDisplay/WordDisplay";
import ReactDOM from "react-dom";
import {
  BsEmojiHeartEyesFill,
  BsEmojiSmileFill,
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
  BsEmojiDizzyFill,
} from "react-icons/bs";
import {
  selectCategory,
  selectNames,
  selectIndex,
  selectGuess,
  addGuess,
} from "../features/manager/managerSlice";
// import { setTimeout } from "timers";
//const data = require("../data/data.json");
require("./GameScreen.scss");

function GameScreen(props: any) {
  const [userValue, setUserValue] = useState(""); // actual char

  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const names = useAppSelector(selectNames);
  const currentIndex = useAppSelector(selectIndex);
  const guess = useAppSelector(selectGuess);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [ballClasses, setBallClasses] = useState("ball-path0");
  const svg = useRef(null);
  const dom = useRef(null);

  const [answer, setAnswer] = useState(
    Array.from(names[currentIndex].replaceAll(/\w/g, "_"))
  );

  function submitClick(e: any) {
    e.preventDefault();
    dispatch(addGuess(userValue));
    updateGuessing();
    setUserValue("");
    if (wrongAnswer > 4) {
      props.history.push("/lose");
    }
    if (!answer.includes("_")) props.history.push(`/win/${wrongAnswer}`); //("/win/" + { wrongAnswer });
  }

  function updateGuessing(): void {
    // currentName, userValue(letter), userGuessing
    let arr = Array.from(names[currentIndex].toLowerCase());
    if (!arr.includes(userValue)) {
      setWrongAnswer(wrongAnswer + 1);
    }
    for (let i in arr) {
      if (guess.includes(arr[i])) {
        answer[i] = Array.from(names[currentIndex])[i];
      }
    }
    setAnswer(answer);
  } // end updateGuessing

  useEffect(() => {
    if (userValue !== "") {
      dispatch(addGuess(userValue));
      setAnswer(answer);
    }
  }); //currentName, userValue
  useEffect(() => {
    setBallClasses(
      `${wrongAnswer === 0 ? "ball " : ""}  ball-path${wrongAnswer} ${
        wrongAnswer !== 0 ? "ball-anim" : ""
      } ${"anim-start"}`
    );
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setBallClasses(` ball-path${wrongAnswer} anim-stop`);
    }, 2000);

    return () => clearTimeout(timer);
    
  }, [wrongAnswer]);
  // const ball = React.cloneElement(
  //   <div className={` ball-path${wrongAnswer}`}></div>
  // );
  return (
    <div ref={dom} className="game-screen bg">
      <h1>
        category: <strong>{category} </strong>{" "}
      </h1>

      {/* <h2>you choose {props.match.params.category}</h2> */}
      <section className="wrapper">
        <div className="left">
          {console.log(names[currentIndex])}
          <h4>{answer.join("")} </h4>
          <hr />
          <p>
            wrong answers: <strong>{wrongAnswer}</strong>{" "}
          </p>
        </div>
        <aside className="right">
          <figure>
            {/* {ball} */}
            <div
              id="myball" //{wrongAnswer.toString()}
              className={ballClasses}
            ></div>
            <svg ref={svg} viewBox="0 0 400 250" height="100%" width="100%">
              <path
                className={`draw draw-path1 ${
                  wrongAnswer > 0 ? "path-anim" : ""
                }`} //"draw draw-path1"
                strokeLinejoin="round"
                stroke="darkslategray"
                fill="none"
                strokeWidth="5"
                d="M 52.34375,233.98437 56.640625,11.71875 223.82813,10.9375 l -0.39063,12.5"
              />
              ,
              <path
                className={`draw draw-path1 ${
                  wrongAnswer > 1 ? "path-anim" : ""
                }`} //"draw draw-path2"
                strokeLinejoin="round"
                stroke="darkslategray"
                fill="none"
                strokeWidth="5"
                d="M 223.68646,23.436203 A 24.447514,25 0 0 1 248.13385,48.354736 24.447514,25 0 0 1 223.8458,73.435672 24.447514,25 0 0 1 199.24012,48.680601 24.447514,25 0 0 1 223.3678,23.438327"
              />
              <path
                className={`draw draw-path1 ${
                  wrongAnswer > 2 ? "path-anim" : ""
                }`} //"draw draw-path3"
                strokeLinejoin="round"
                stroke="darkslategray"
                fill="none"
                strokeWidth="5"
                d="M 221.48437,73.828125 C 219.14062,173.82812 189.84375,179.6875 189.84375,179.6875"
              />
              <path
                className={`draw draw-path1 ${
                  wrongAnswer > 3 ? "path-anim" : ""
                }`} //"draw draw-path4"
                strokeLinejoin="round"
                stroke="darkslategray"
                fill="none"
                strokeWidth="5"
                d="m 191.01562,111.71875 19.14063,-33.984375 11.32812,-3.90625 7.8125,16.015625 -1.5625,36.32813"
              />
              <path
                className={`draw draw-path1 ${
                  wrongAnswer > 4 ? "path-anim" : ""
                }`} //"draw draw-path5"
                strokeLinejoin="round"
                stroke="darkslategray"
                fill="none"
                strokeWidth="5"
                d="m 173.82812,207.42187 19.53125,-11.32812 -3.51562,-16.40625 -8.98438,12.10937 -25.39062,4.29688"
              />
            </svg>
          </figure>
        </aside>
      </section>
      <div className="bottom">
        <div className="bottom-left">
          <h4>type your answer </h4>
          <form onSubmit={submitClick}>
            <input
              autoFocus={true}
              autoComplete={"off"}
              type="text"
              pattern={"[a-zA-Z]"}
              maxLength={1}
              required
              onChange={(e) => {
                setUserValue(e.target.value);
              }}
              name=""
              id="answer"
              value={userValue}
            />
            <input type="submit" value="Enter" />
          </form>
        </div>
        {/* end bottom-left */}
        <div className="bottom-right">
          {wrongAnswer > 4 ? (
            <BsEmojiDizzyFill color={"red"} size={70} />
          ) : wrongAnswer > 3 ? (
            <BsEmojiFrownFill color={"orange"} size={70} />
          ) : wrongAnswer > 2 ? (
            <BsEmojiNeutralFill color={"yellow"} size={70} />
          ) : wrongAnswer > 1 ? (
            <BsEmojiSmileFill color={"blue"} size={70} />
          ) : (
            <BsEmojiHeartEyesFill color={"green"} size={70} />
          )}
          {/* <BsEmojiHeartEyesFill size={70} /> */}
        </div>
      </div>
    </div>
  );
}

export default GameScreen;
