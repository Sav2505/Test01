import './App.css'
import { useMemo } from 'react'

const listSquares =
  ["blue", "green", "orange", "orchid", "red", "yellow", "purple"];

const numOfLines = 5;

function buildSquaresList(length: number, colors: string[]) {
  const lst: string[][] = [];

  for (let i = 0; i < length; i++) {
    { i % 2 === 0 ? lst.push([...colors]) : lst.push([...colors].reverse()) };
  }

  return lst;
}

export const App = () => {
  const lst = useMemo(() => buildSquaresList(numOfLines, listSquares), []);
  console.log("list: ", lst);

  return (
    <div className="main">

      <div className="cont-headline">
        Headline
      </div>

      <div className="cont-content">
        {lst.map((inner_list, index) => (

          <div
            key={index}
            className={`line${index}`}
            style = {{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginLeft: '10px',
              width: '20%',
              margin: '5px',
              gap: '5px'
            }}
            >
            {inner_list.map((item, inner_index) => (

              <div
                key={inner_index}
                className={`item${index}${inner_index}`}
                style={{
                  height: '50px',
                  flexGrow: '1',
                  backgroundColor: item
                }}

              ></div>
            ))}

          </div>
        ))}

      </div>
    </div>
  )
}