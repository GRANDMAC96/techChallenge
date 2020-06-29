import { connect } from "react-redux";
import PlayerName from "./PlayerName";
import { list } from "../../data/actions";


const mapStateToProps = (state) => {
    return {
        playername: state.playername,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddition: (data) => {
            dispatch(list(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerName);

// export default connect(mapStateToProps)(PlayerName);