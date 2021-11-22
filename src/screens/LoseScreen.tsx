import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectIndex, selectNames } from "../features/manager/managerSlice";
require("./LoseScreen.scss");

function LoseScreen() {
  const names = useAppSelector(selectNames);
  const currentIndex = useAppSelector(selectIndex);
  return (
    <div className="bg lose-screen">
      <h1>Better Luck next time! </h1>

      <br />
      <h2>
        Correct answer is: <span>{names[currentIndex]}</span>{" "}
      </h2>
      <br />
      <h2>Would you like play again?</h2>
      <Link className="button" to={"/"}>
        Yes
      </Link>
    </div>
  );
}

export default LoseScreen;
