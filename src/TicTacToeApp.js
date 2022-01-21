import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import PlayerDeck from "./components/PlayerDeck";
import PlayerContextProvider from "./contexts/PlayerContext";
import TicTacContextProvider from "./contexts/TicTacContext";
import './css/TicTacToeApp.css';

function TicTacToeApp() {
  return (
    <div className="TicTacToeApp">
      <TicTacContextProvider>
        <Header />
        <div className="play-space">
          <PlayerContextProvider>
            <PlayerDeck player="player-1"/>
            <GameBoard />
            <PlayerDeck player="player-2"/>
          </PlayerContextProvider>
        </div>

      </TicTacContextProvider>
    </div>
  );
}


export default TicTacToeApp;