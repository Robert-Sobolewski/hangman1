import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";
import {
  selectCategory,
  setCategory,
  setNames,
  shuffleNames,
} from "../features/manager/managerSlice";
require("./NewScreen.scss");
const data = require("../data/data.json");

function NewScreen() {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const [cat, setCat] = useState([]);

  useEffect(() => {}, []);
  function render(): any {
    data["data"].map((i: any) => (
      <li>
        {JSON.stringify(i)}
        {/* <a href="/">{i.category}</a> */}
      </li>
    ));
  }
  function linkClick(category: string): void {
    dispatch(setCategory(category));
    dispatch(
      setNames(
        data["data"].filter((i: any) => i.category === category)[0].names
      )
    );
    dispatch(shuffleNames());
  }
  return (
    <div className="new-screen bg">
      <h1>New Game</h1>
      <h3>Select category</h3>
      <ul>
        {data["data"].map((i: any, index: any) => (
          <li>
            <Link
              className="button"
              key={index}
              to={{
                pathname: "/game/" + i.category,
              }}
              onClick={(e: any) => linkClick(i.category)}
            >
              {i.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewScreen;
