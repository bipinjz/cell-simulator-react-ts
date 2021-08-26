import React, {useState,useEffect} from 'react';
import './App.css'
import  Board  from './components/board';
import { get2dArray } from './utils/2darray';
import { nextGenArray } from './utils/nextGenArray';


function App() {

  const rows:number = 20;
  const cols:number = 20;

  const [start, setStart] = useState(0);
  const [boardArray, setBoardArray] = useState(get2dArray(rows,cols));

  useEffect(()=>{
    
    if(start === 1){     
      const interval = setInterval(() => {
        setBoardArray(nextGenArray(boardArray, rows, cols))
      }, 500);
      return () => clearInterval(interval);
    }
  },[start, boardArray]) 
  
  

  /**
   * Toggles the Cell State
   */
  const toggleCell = (r:number,c:number) => {    
    let newArray = JSON.parse(JSON.stringify(boardArray));
    newArray[r][c] = newArray[r][c] === 0 ? 1 : 0;
    setBoardArray(newArray)        
  }


  /**
   * Reset to emptyBoard
   */
  const setEmptyBoard = () => {
    let newEmptyArray = get2dArray(rows, cols);    
    setBoardArray(newEmptyArray)
    setStart(0)
  }

  /**
   * Generate NextBoard
   */
  const nextGen = () => { 
    setBoardArray(nextGenArray(boardArray, rows, cols))
  }  

  /**
   * Auto Run
   */
  const setAuto = () => {
    setStart(1)
    setBoardArray(get2dArray(rows,cols, false))
  }

  return (
    <div className="App">      
        <Board 
          start = {setAuto}
          boardArray = {boardArray}
          toggleCell = { toggleCell }      
          reset={setEmptyBoard} 
          nextGen={nextGen}        
        />       
    </div>
  );
}

export default App;
