
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

//randomly shuffles an array efficiently
const randomTeam = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
        let rand = Math.floor((i + 1) * Math.random()); //get random between zero and i (inclusive)
        let temp = array[i];   //swap i and the random index
        array[i] = array[rand];
        array[rand] = temp;
    }
    return array;
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADDPLAYER": return list(state, action);
        default: return state;
    }
}

export default reducer;