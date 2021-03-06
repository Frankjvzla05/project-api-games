import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/header/header.component';
import Footer from './components/footer/footer';
import GamesContextProvider from "./contexts/GamesContext";
import GameContextProvider from "./contexts/GameContext";
import Games from "./components/Games";
import GameDetail from "./components/Games/GameDetail";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Switch >
        <Route exact path="/">
          <GamesContextProvider>
            <Games />
          </GamesContextProvider>
        </Route>
        <Route path="/game/:id">
          <GameContextProvider>
            <GameDetail />
          </GameContextProvider>
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
