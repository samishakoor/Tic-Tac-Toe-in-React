import React, { useState,useEffect } from "react";
import { Intro,Board } from "./components";

const App = () => {
  const [status, setStatus] = useState("X");
  const [data, setData] = useState(Array(9).fill(""));

  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (reset) {
      setData(Array(9).fill(""));
      setStatus("X");
      setWinner("");
      setReset(false);
    }
  }, [reset, setReset]);

  const checkDraw = (Board) => {
    let count = 0;
    Board.forEach((element) => {
      if (element !== "") {
        count += 1;
      }
    });
    if (count >= 9) {
      return true;
    } else {
      return false;
    }
  };

  const checkWinner = (Board) => {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let flag = false;
    conditions.forEach((element) => {
      if (
        Board[element[0]] !== "" &&
        Board[element[1]] !== "" &&
        Board[element[2]] !== ""
      ) {
        if (
          Board[element[0]] === Board[element[1]] &&
          Board[element[1]] === Board[element[2]]
        ) {
          flag = true;
        }
      }
    });

    return flag;
  };

  const handleSquareClick = (i) => {
    if (data[i] === "") {
      let Board = data;
      Board[i] = status;
      setData(Board);

      if (status === "X") {
        setStatus("O");
      } else {
        setStatus("X");
      }
      if (checkWinner(Board)) {
        if (status === "X") {
          setWinner("Player 1 Wins ");
        } else {
          setWinner("Player 2 Wins");
        }
      }

      if (checkDraw(Board)) {
        setWinner("Game Drawn!");
      }
    }
  };

  const Square = (props) => {
    return (
      <button className="square" onClick={() => handleSquareClick(props.index)}>
        {data[props.index]}
      </button>
    );
  };

  const Board = () => {
    const renderSquare = (i) => {
      return <Square index={i} />;
    };

    return (
      <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  };

  const Reset = () => {
    setReset(true);
  };

  return (
    <div id="main">
      <Intro />
      <div className="game">
        <div className="game-info">
          <div className="next-player"> Next player: {status}</div>
        </div>
        <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
          <div className="winner-text">{winner}</div>
          <button className="reset-button" onClick={Reset}>Reset</button>
        </div>
        <div className="game-board">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default App;
