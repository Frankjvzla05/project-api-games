import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

const GameDetail = () => {
    const { doneFetch, currentGame } = useContext(GameContext);
    const { title,thumbnail, genre, platform, short_description, game_url  } = currentGame;
    
    return (
        <>
            {doneFetch ?   (  <div className="Game-detail">
                <img src={thumbnail} alt={`Game-${title}`} />
                <div className="Game-footer">
                    <h3 className="name">{`Juego:${title}`}</h3>
                    <h3 className="category">{`Categoria: ${genre}`}</h3>
                    <h3 className="platform">{`Plataforma: ${platform}`}</h3>
                    <h3 className="short_description">{`Descripción: ${short_description}`}</h3>
                    <a href={game_url} target="_blank" className="game_url">Ir al juego</a>
                </div>
            </div>
            ) : "cargando" }
        </>

    )
}




export default GameDetail
