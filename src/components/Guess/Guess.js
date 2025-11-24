import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guesses }) {
  const numsOfEmptyRowsToRender = Math.floor(
    NUM_OF_GUESSES_ALLOWED - guesses.length
  );

  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => (
        <span key={id} className="guess">
          {guess.split("").map((letter) => (
            <span key={crypto.randomUUID()} className="cell">
              {letter}
            </span>
          ))}
        </span>
      ))}
      {range(0, numsOfEmptyRowsToRender).map((col) => (
        <span key={crypto.randomUUID()} className="guess">
          {range(0, 5).map((index) => (
            <div key={crypto.randomUUID()} className="cell">
              {}
            </div>
          ))}
        </span>
      ))}
    </div>
  );
}

export default Guess;
