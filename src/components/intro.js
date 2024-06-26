import React from "react";

const Intro = () => {
  return (
    <div id="intro">
      
      <h1 class="subtitle"> Tic Tac Toe Game</h1>
      <div class="description">
        <p> Rules of Tic Tac Toe : </p>
        <ul>
          <li>There are two Players: Player 1 (X) and Player 2 (O)</li>
          <li>Each Player will take alternate turns</li>
          <li>
            The Application will display the next user to play and will mark
            the square with the player's symbol
          </li>
          <li>
            The Application will declare a winner when either player has 3
            consecutive symbol's (vertical, horizontal, diagonal)
          </li>
          <li>
            The Application will declare draw if neither player made a match
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
