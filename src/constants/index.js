const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://www.freetogame.com/api/games";
const top_search = "?sort-by=relevance";
const  Detail_game = "https://www.freetogame.com/api/game?id=";



export const topGamesGet = () => `${ cors_anywhere }${base_url}${ top_search }`;
export const DetailGameGet = (game_id) => `${ cors_anywhere }${ Detail_game }${game_id}`;





