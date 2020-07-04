import initialState from "./initial";

const player = (state, action) => {
    return {
        ...state,
        playername: action.playername,
    }
}

const list = (state, action) => {
    return {
        ...state,
        playerlist: [
            ...state.playerlist,
            {
                playername: action.playername
            }
        ],
        playername: "",
    };
}

//randomly shuffles an array efficiently


// const team = (state, action) => {
//     let players = [...action.playersarray];
//     for (let i = players.length - 1; i > 0; i -= 1) {
//         let rand = Math.floor((i + 1) * Math.random()); //get random between zero and i (inclusive)
//         let temp = players[i];   //swap i and the random index
//         players[i] = players[rand];
//         players[rand] = temp;
//     }
//     return {
//         ...state,
//         playerlist: [...players]
//     }

// }



const reducer = (state, action) => {
    switch (action.type) {
        case "ADDPLAYER": return list(state, action);
        case "CHANGENAME": return player(state, action);
        default: return state;
    }
}

export default reducer;