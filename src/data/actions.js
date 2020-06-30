export const list = (playername) => {
    return {
        type: "ADDPLAYER",
        playername: playername
    };
};
export const team = () => {
    return {
        type: "CREATETEAM",
    };
};