import React from 'react';
import Grid from './grid';

interface Props {      
    boardArray:number[][],
    start(): void,
    reset: () => void,
    toggleCell(r:number,c:number): void,
    nextGen(): void
}

const Board = (props: Props) => {
  
  return (
    <div>
      <Grid boardArray={props.boardArray} toggleCell={props.toggleCell} />
      <br/>
      <button data-testid="start" onClick={props.start}>Start</button>
      <button data-testid="reset" onClick={props.reset}>Reset</button>
      <button data-testid="nextgen" onClick={props.nextGen}>Next Generation</button> 
    </div>    
  );
}

export default Board