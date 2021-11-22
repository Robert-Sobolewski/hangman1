import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

require("./WinScreen.scss");

function WinScreen(props: any) {
  const arr: any[] = Array(5).fill(<BsStarFill color="gold" size={70} />);
  arr.splice(
    5 - parseInt(props.match.params.wrong),
    parseInt(props.match.params.wrong),
    Array(parseInt(props.match.params.wrong)).fill(
      <BsStar color="gold" size={70} />
    )
    // <BsStar color="gold" size={70} />,
    // <BsStar color="gold" size={70} />
  );
  return (
    <div className="bg win-screen">
      <h1>Congratulation You Won !!!</h1>
      <h3>mistakes {props.match.params.wrong}</h3>
      <p>{arr.map((i) => i)}</p>

      <br />
      <h2>Would you like play again?</h2>
      <Link className="button" to={"/"}>
        Yes
      </Link>
    </div>
  );
}

export default WinScreen;
