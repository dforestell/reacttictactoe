import React, { Component } from 'react';
import './App.css';
import Status from './components/status.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }
  }

  checkWinner() {
    let winLines =
    [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"] 
    ]
    this.checkMatch(winLines)
  }

  checkMatch(winLines){
      for (let index = 0; index < winLines.length; index ++) {
        const [a, b, c] = winLines[index];
        let board = this.state.board
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          this.setState({
            winner: this.state.player
          })
        }
    }
  }

  handleClick(index){
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board 
      if(this.state.board[index] === null ) {
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        })
        this.checkWinner( )
      }
    }  
  }

  setPlayer(player) {
    this.setState({
      player: player
    })
  }

  reset() {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null
    })
  }

  renderBoxes() {
    return this.state.board.map(
      (box, index) => 
        <div className="box" key={index} onClick={(e) =>this.handleClick(index)}>
          {box}
        </div>)
  }
  
  render() {


    return (
      <div className="container">
        <h1> Tic Tac Toe </h1>
        <Status player={this.state.player} setPlayer={(e) => {this.setPlayer(e)}} winner={this.state.winner}/>
        <div>
          <button onClick={() => this.reset()}>Reset</button>
        </div>
        <div className="board">
          { this.renderBoxes()}  
        </div>
      </div>
    );
  }
}

export default App;
