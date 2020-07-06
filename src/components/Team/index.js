import { connect } from "react-redux";
import Team from "./Team";

const mapStateToProps = (state) => {
    return {
        teamA: state.teamA,
        teamB: state.teamB,
    }
}

export default connect(mapStateToProps)(Team);