import React, { Component } from 'react';


// import { saveSettings } from "../../data/actions";

// winningScore, alternate, player1Name, player2Name
// I'm setting up a class to control my local state of my settings form.

class PlayerName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playername: props.playername,
        }
        this.handlePlayer = this.handlePlayer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePlayer(e) {
        this.setState({ playername: e.currentTarget.value });
    }

    // handleWinningScore(e) {
    //     this.setState({ winningScore: e.currentTarget.value });
    // }
    handleSubmit(e) {
        e.preventDefault();
        // call the passed in function
        // pass it the current input value 
        this.props.handleAddition(this.state.playername);
        this.setState({ playername: "" });
    }
    render() {
        let { playername } = this.state;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Player Name</label>
                        <input
                            type="name"
                            placeholder="Enter name"
                            value={playername}
                            onChange={this.handlePlayer}
                        />
                    </div>
                    <button>Start Game</button>
                </form>
            </>
        );
    }
}

export default PlayerName;