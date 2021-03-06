import React from "react";
import InfoGamePreview from "../Games/Game";

const InfoGames = ({ topGames }) => {
  console.log(topGames)
  return (
    <div className="game-preview">
      <div className="preview">
        {topGames
          .map((game) => (
            <InfoGamePreview key={game.id} game={game} />
          ))}
      </div>
    </div>
  )

}

export default InfoGames;
