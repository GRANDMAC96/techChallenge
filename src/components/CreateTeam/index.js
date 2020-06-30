import { connect } from "react-redux";
import CreateTeam from "./CreateTeam";
import { team } from "../../data/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        createTeam: () => dispatch(team())
    }
}

export default connect(null, mapDispatchToProps)(CreateTeam); 