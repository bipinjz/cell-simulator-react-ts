/**
 * Description: This function is used to get new array for new board based on rules
 * @param boardArray 
 * @param rows 
 * @param cols 
 */
export const nextGenArray = (
    boardArray:any, 
    rows:number, 
    cols:number
  ) => {

    let newArray = JSON.parse(JSON.stringify(boardArray));

    for (let i=0; i < cols; i++){        
      for(let x=0; x < rows; x++){
          let neighbors = getNeighbors(boardArray, x, i, rows, cols);

          if(boardArray[x][i] === 1){
            if(neighbors < 2  || neighbors > 3 ){ newArray[x][i]  = 0; }  
          }else{
            if(neighbors === 3){ newArray[x][i]  = 1; }    
          }                             
      }
  }
  return newArray;
}


/**
 * Description: This function gets the total number of neibouring cells with value greater than 0
 * @param boardArray 
 * @param row 
 * @param col 
 * @param rows 
 * @param cols 
 */

const getNeighbors = (
  boardArray:any, 
  row:number, 
  col:number, 
  rows:number, 
  cols:number
  ) => {

    let neighbors = 0;
    const allNeighbors = [[-1, -1],[-1, 0],[-1, 1],[0, 1],[1, 1],[1, 0],[1, -1],[0, -1]];
    
    for (let i = 0; i < allNeighbors.length; i++) {
      const d = allNeighbors[i];
      let r1 = row + d[0];
      let c1 = col + d[1];
      
      if (c1 >= 0 && c1 < cols && r1 >= 0 && r1 < rows && boardArray[r1][c1]) {
        neighbors++;
      }
  }
  return neighbors;
}