import { useState } from "react";

export default function WhoWins({ numPlayers = 3, target = 5 }) {
  //if the props are not defined then default count is applied
  const [scores, setScores] = useState(new Array(numPlayers).fill(0)); // the initial state will be number of zeros.
  //     const incrementScore = (idx) => {
  //         setScores(prevScores => { //calling setScore (updater function) with prevScores
  //             const copy = [...prevScores]; // that will duplicate the prevScores into a array called copy.
  //             copy[idx] += 1; // then in that copy, jo bhi idx miley ga, us wali idx pey "add 1 to it".
  //             return copy; // phir jo bhi copy ayegi, return that.
  //         })
  //     }

  const incrementScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });
    });
  };
  const resetScores = () => {
    setScores(new Array(numPlayers).fill(0));
  };

  return (
    <div>
      <h1> Won Wins </h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              player {idx + 1} : {score}
              <button onClick={() => incrementScore(idx)}> +1 </button>
             <p>{score>=target && "winner"} </p>
            </li>
          );
        })}
      </ul>
      <button onClick={resetScores}> Khalaas </button>
    </div>
  );
}
