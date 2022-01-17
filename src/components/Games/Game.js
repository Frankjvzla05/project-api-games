import React from "react";
import ButtomOption from "../Common/ButtomOption";

const InfoGamePreview = ({ game }) => {
    const { id, title, thumbnail, genre, platform } = game;
    return (

        <div className="Game-item">
            <img src={thumbnail} alt={`Game-${title}`} />
            <div className="Game-footer">
                <h3 className="name">{`Juego:${title}`}</h3>
                <h3 className="category">{`Categoria: ${genre}`}</h3>
                <h3 className="platform">{`Plataforma: ${platform}`}</h3>
            </div>
            <ButtomOption to={`/game/${id}`} text="Ver detalle" />
        </div>
    )
}

export default InfoGamePreview;