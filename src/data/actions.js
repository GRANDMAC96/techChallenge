export const list = (playername) => {
    return {
        type: "ADDPLAYER",
        playername: playername
    };
};