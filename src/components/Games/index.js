import React, { useContext } from "react";
import { GamesContext } from "./../../contexts/GamesContext";
import InfoGames from "./Games";

const Games = () => {
    const { topGames, doneFetch } = useContext(GamesContext);

    return (

        <div className="games-page">


            {doneFetch ?
                (topGames.length ?
                    <InfoGames topGames={topGames} />
                    :
                    "error")

                :
                "No se encontro la informacion"
            }

        </div>

    );
};

export default Games;
