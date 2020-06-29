import { connect } from "react-redux";
import PlayerList from "./PlayerList";

const mapStateToProps = (state) => {
    return {
        playerlist: state.playerlist
    }
}

export default connect(mapStateToProps)(PlayerList);