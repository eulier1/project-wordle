import { useState } from "react";
import Guess from "../Guess/Guess";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export default function SearchInput({ answer }) {
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState("");
  const [numOfGuessesAllowed, setNumOfGuessesAllowed] = useState(
    NUM_OF_GUESSES_ALLOWED
  );

  const attempts = NUM_OF_GUESSES_ALLOWED - numOfGuessesAllowed;

  const [isWinner, setIsWinner] = useState("pending");
  /* 
      1. Track the number of guesses allowed
      2. check if the user guess the word
        2.1 if it's show the happy banner
      3. if number of guesses allowed is zero or less
        3.1 show sad banner
        3.2 disable the input
    */

  const handleSearchInput = (event) => {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert("Please enter a 5 letter word!");
      return;
    }

    if (guess === answer) setIsWinner("success");

    const newNumOfGuessesAllowed = numOfGuessesAllowed - 1;
    setNumOfGuessesAllowed(newNumOfGuessesAllowed);

    if (newNumOfGuessesAllowed === 0) setIsWinner("fail");

    const newGuess = { id: crypto.randomUUID(), guess };
    const newGuesses = [...guesses, newGuess];

    console.log({ guess });
    setGuesses(newGuesses);
    setGuess("");
  };

  return (
    <>
      {isWinner === "success" && (
        <Banner isWinner={true} numOfGuesses={attempts} />
      )}
      {isWinner === "fail" && <Banner isWinner={false} answer={answer} />}

      <Guess guesses={guesses} answer={answer} />

      <form className="guess-input-wrapper" onSubmit={handleSearchInput}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          type="text"
          alt="search"
          id="guess-input"
          onChange={({ target: { value } }) => setGuess(value.toUpperCase())}
          value={guess}
          maxLength={5}
          minLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          required
          disabled={
            Boolean(numOfGuessesAllowed === 0) || isWinner === "success"
          }
        />
      </form>
    </>
  );
}

function showBanner() {}
