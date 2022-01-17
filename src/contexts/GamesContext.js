import React, { createContext, useState, useEffect } from "react";
import { topGamesGet } from "./../constants"




export const GamesContext = createContext();


const GamesContextProvider = ({ children }) => {

    const [doneFetch, setDoneFetch] = useState();
    const [topGames, setTopGames] = useState();

    // didMount, didUpdate, willUnmount
    useEffect(() => {
        getTopGames();
    }, []);

    const getTopGames = () => {
        fetch(topGamesGet())
            .then((res) => res.json())
            .then((data) => {
                setTopGames(data);
                setDoneFetch(true);
                console.log(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <GamesContext.Provider value={{ doneFetch, topGames }}>
          {children}
        </GamesContext.Provider>
      );


}


export default GamesContextProvider