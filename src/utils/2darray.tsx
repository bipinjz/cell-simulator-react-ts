/**
 * Description: This function is to generate 2D Arrays
 * @param rows 
 * @param cols 
 * @param emptyBoard 
 */
export const get2dArray = (rows:number, cols:number, emptyBoard=true) => {   
         
    const grid:number[][] = [];
    for (let i=0; i < cols; i++){
        grid[i] = [];
  
        for(let x=0; x < rows; x++){
          if(emptyBoard){
            grid[i][x] = 0; 
          }else{
            grid[i][x] = Math.random() < 0.5 ? 0 : 1; 
          }
                   
        }
    }
    return grid;
  }