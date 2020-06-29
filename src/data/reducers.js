
const list = (state, action) => {
    return {
        ...state,
        playerlist: [
            ...state.playerlist,
            {
                playername: action.playername
            }
        ]
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "ADDPLAYER": return list(state, action);
        default: return state;
    }
}

export default reducer;