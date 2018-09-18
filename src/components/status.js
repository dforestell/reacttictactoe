import React, { Component } from 'react';
import Player from './choosePlayer.js';

class Status extends Component {
	
	handleSetPlayer(e){
		this.props.setPlayer(e)
	}

	showGameStatus(){
		if(this.props.winner){
			return <h2> The Winner is {this.props.winner} </h2>
		} else{
			return this.props.player ? <h2> Player {this.props.player}'s turn!</h2> : <Player player={(e) => this.handleSetPlayer(e)} />
		}
	}


	render (){
		return <span>{this.showGameStatus()}</span>
	}
}

export default Status;