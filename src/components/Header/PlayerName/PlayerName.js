import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import { saveSettings } from "../../data/actions";

// winningScore, alternate, player1Name, player2Name
// I'm setting up a class to control my local state of my settings form.

class PlayerName extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     playerName: props.playerName,
        // }
        // this.handlePlayer = this.handlePlayer.bind(this);
    }

    // handlePlayer(e) {
    //     this.setState({ player1Name: e.currentTarget.value });
    // }

    // handleWinningScore(e) {
    //     this.setState({ winningScore: e.currentTarget.value });
    // }
    // handleSubmit(e) {
    //     e.preventDefault();
    //     // call the passed in function
    //     // pass it the current input value 
    //     this.props.handleSave(this.state);
    // }
    render() {
        // let { } = this.state;
        return (
            <>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Enter name"
                        // value={playerName}
                        // onChange={this.handlePlayer}
                        />
                    </Form.Group>
                </Form>
                <Button
                // variant="primary"
                // onClick={this.handleSubmit}
                >
                    Start Game</Button>
            </>
        );
    }
}

export default PlayerName;