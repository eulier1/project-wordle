import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import SearchInput from '../SearchInput/SearchInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  return (<SearchInput answer={answer} />
);
  
}

export default Game;
