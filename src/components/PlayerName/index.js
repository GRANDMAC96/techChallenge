import { connect } from "react-redux";
import PlayerName from "./PlayerName";
import { player, list, team } from "../../data/actions";


const mapStateToProps = (state) => {
    return {
        playername: state.playername,
        playerlist: state.playerlist,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlayerName: (playername) => {
            dispatch(player(playername));
        },
        handleAddition: (data) => {
            dispatch(list(data));
        },
        handleTeam: (players) => {
            dispatch(team(players));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerName);

