import React, { createContext, useState, useEffect } from "react";
import { DetailGameGet } from "./../constants";

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const game_id = window.location.pathname.split("/")[2];
    const [doneFetch, setDoneFetch] = useState();
    const [currentGame, setCurrentGame] = useState([]);

    useEffect(() => {
        const getGame = () => {
            fetch(DetailGameGet(game_id))
                .then((res) => res.json())
                .then((data) => {
                    setDoneFetch(true);
                    console.log(data);
                    setCurrentGame(data);
                })
                .catch((err) => console.log(err));
        };

        getGame(game_id);

    }, [game_id]);

    return (
        <GameContext.Provider value={{ doneFetch, currentGame }}>
            {children}
        </GameContext.Provider>
    );

}


export default GameContextProvider