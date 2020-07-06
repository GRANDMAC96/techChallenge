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

// shuffle function, randomly shuffles an array efficiently, for use with the Create Team button
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
        let rand = Math.floor((i + 1) * Math.random()); //get random between zero and i (inclusive)
        let temp = array[i];   //swap i and the random index
        array[i] = array[rand];
        array[rand] = temp;
    }
    return array;
}

const teams = (state, action) => {
    let players = shuffle(state.playerlist); //shuffle array

    // separate the array back into the 2 teams
    let teamAplayers = players.slice(0, (players.length / 2));
    let teamBplayers = players.slice((players.length / 2));

    return {
        ...state,
        teamA: teamAplayers,
        teamB: teamBplayers,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGENAME": return player(state, action);
        case "ADDPLAYER": return list(state, action);
        case "CREATETEAM": return teams(state, action);
        default: return state;
    }
}

export default reducer;