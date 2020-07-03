import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


// import { saveSettings } from "../../data/actions";

// winningScore, alternate, player1Name, player2Name
// I'm setting up a class to control my local state of my settings form.

class PlayerName extends Component {
    constructor(props) {
        super(props);
        this.handlePlayer = this.handlePlayer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handlePlayer(e) {
        // this.setState({ playername: e.currentTarget.value });
        this.props.setPlayerName(e.currentTarget.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        // call the passed in function
        // pass it the current input value 
        this.props.handleAddition(this.props.playername);
        // this.setState({ playersarray: [...this.state.playersarray, { playername: this.state.playername }] })
        this.setState({ playername: "" });
    }
    handleCreate(e) {
        e.preventDefault();
        this.props.handleTeam(this.props.playerlist);
    }
    render() {
        return (
            <>
                <form className="form">
                    <div>
                        <label>Player Name</label>
                        <input
                            type="name"
                            placeholder="Enter name"
                            value={this.props.playername}
                            onChange={this.handlePlayer}
                        />
                    </div>
                </form>
                <button
                    onClick={this.handleSubmit}
                    className="button">Add Player
                </button>
                <button
                    onClick={this.handleCreate}>
                    {/* <Link to="/">Create Team</Link> */}
                    Create
                </button>

                {/* <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>{
                        playersarray.map((player, index) =>
                            <tr key={index}>
                                <td>{player.playername}</td>
                            </tr>
                        )}
                    </tbody>
                </Table> */}
            </>
        );
    }
}

export default PlayerName;