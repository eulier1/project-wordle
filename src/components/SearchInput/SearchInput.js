import { useState } from 'react';
import Guess from '../Guess/Guess';

export default function SearchInput() {

    const [guesses, setGuesses] = useState([])
    const [guess, setGuess] = useState("") 

    const handleSearchInput = (event) => {
        event.preventDefault()

        
        if (guess.length !== 5) {
            window.alert("Please enter a 5 letter word!");
            return;
        }
        
        const newGuess = { id: crypto.randomUUID(), guess }
        const newGuesses = [...guesses, newGuess]

        console.log({guess})
        setGuesses(newGuesses)
        setGuess("")
    }

    return (
    <>
        <Guess guesses={guesses} />

        <form className="guess-input-wrapper" onSubmit={handleSearchInput}>
            <label htmlFor="guess-input" >Enter guess:</label>
            <input type="text" alt="search" id="guess-input" onChange={ ( { target : { value }} ) => setGuess(value.toUpperCase()) } value={guess} maxLength={5} minLength={5} pattern="[a-zA-Z]{5}" title="5 letter word" required/>
        </form>
    </>)
}