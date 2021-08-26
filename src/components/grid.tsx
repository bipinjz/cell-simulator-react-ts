import * as React from 'react';

interface GridProps {
  boardArray:number[][],
  toggleCell(r:number,c:number): void
}

export default function Grid (props: GridProps) {

  const genGrid = (array:number[][]) => {
    return (
      <table >
        <tbody data-testid="grid">                
        {
          array.map((r:any,i:number)=>{
            return <tr key={i} data-testid={"row"+i}>
              {
                r.map((c:any,z:number)=>{
                  if(c === 0){
                      return <td onClick={() => props.toggleCell(i,z)} key={z} style={{background: '#000', border:'1px solid #ccc'}}></td>
                  }else{
                      return <td onClick={() => props.toggleCell(i,z)} key={z} style={{ border:'1px solid #ccc'}}></td>
                  }
                })
              }</tr>
          })
        }
        </tbody>
      </table>
    )
  }

  let table:any = genGrid(props.boardArray)

  return (
    <div>
      {table} 
    </div>
  );
}
