import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectNames, selectIndex, selectGuess } from "../../features/manager/managerSlice";
require("./WordDisplay.scss");
function WordDisplay(props: any) {
  const dispatch = useAppDispatch();
  const names = useAppSelector(selectNames);
  const currentIndex = useAppSelector(selectIndex);
  const [word, setWord] = useState(names[0]);
  const userGuessing = useAppSelector(selectGuess);

  const [guess, setGuess] = useState(Array.from(names[currentIndex].replaceAll(/\w/g, "_")));

  function prepareData() {
    let a = Array.from(names[currentIndex])
    let tmp = guess;
    for(let i in a){
      if(userGuessing.includes(a[i].toLowerCase())){
        tmp[i]=names[currentIndex][i]
      }
    }
    setGuess(tmp)
  }
  useEffect(() => {
    //setWord(names[0]);
    //setGuess(word.replaceAll(/\w/g, "_"));
  }, []);
  useEffect(() => {

  });

  return (
    <div className="word-display">
      <p>{guess}</p>
      <br/>
      <h3>`current name: {names[currentIndex]}`</h3>
    </div>
  );
}

export default WordDisplay;
