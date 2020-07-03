export const player = (playername) => {
    return {
        type: "CHANGENAME",
        playername: playername
    };
};
export const list = (playername) => {
    return {
        type: "ADDPLAYER",
        playername: playername
    };
};
export const team = (players) => {
    return {
        type: "CREATETEAM",
        players: players
    };
};