import { useState } from 'react';

export default function SearchInput() {

    const [guess, setGuess] = useState("") 

    const handleSearchInput = (event) => {
        event.preventDefault()

        if (guess.length !== 5) {
            window.alert("Please enter a 5 letter word!");
            return;
        }
        
        console.log({guess})
        setGuess("")
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSearchInput}>
            <label htmlFor="guess-input" >Enter guess:</label>
            <input type="text" alt="search" id="guess-input" onChange={ ( { target : { value }} ) => setGuess(value.toUpperCase()) } value={guess} maxLength={5} minLength={5} pattern="[a-zA-Z](5)" title="5 letter word" required/>
        </form>
    )
}