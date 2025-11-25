/**
 * Thanks to Github user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = "✓";

  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  const result = [];

  // Step 1: Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: "correct",
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Step 2: look for misplaced letters. If it's not misplaced,
  // it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = "incorrect";
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i]
    );
    if (misplacedIndex >= 0) {
      status = "misplaced";
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}

/**
 * Eulier's naive solution, made in 30min
 */

// function checkGuess(str1, str2) {
//   let result = [];

//   // guess and answer words (str1, str2) have the same lenght
//   // iterate and compare letters from str1 to str2
//   for (let i = 0; i < str1.length; i++) {
//     let isLetterInSameSpot = str1[i] === str2[i];
//     let isLetterExist = false;
//     let data;

//     // compare current letter in str1 with all of the letters in str2
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//         isLetterExist = true;
//         break;
//       }
//     }

//     data = {
//       letter: str1[i],
//       isLetterInSameSpot,
//       isLetterExist,
//     };
//     result.push(data);
//   }

//   return result;
// }

// checkGuess("WHALE", "HELLO");
