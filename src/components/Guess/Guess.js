import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guesses, answer }) {
  const numsOfEmptyRowsToRender = Math.floor(
    NUM_OF_GUESSES_ALLOWED - guesses.length
  );

  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => (
        <span key={id} className="guess">
          {checkGuess(guess, answer).map(({ letter, status }) => (
            <span key={crypto.randomUUID()} className={`cell ${status}`}>
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
