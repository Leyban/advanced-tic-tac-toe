import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { TicTacContext } from "../contexts/TicTacContext";

const PlayerDeck = (props) => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement, shakeCoin } = useContext(PlayerContext);
    const { p1Turn, playerWallet, setPlayerWallet, reset } = useContext(TicTacContext);

    const handleClick = (e, num) => {
        console.log('player-deck handleClicked');

        // Checking if this player's turn
        if(props.player === 'player-1'){
            if(!p1Turn){return shakeCoin('deck',num,props.player);}
        } else if(props.player === 'player-2'){
            if(p1Turn){return shakeCoin('deck',num,props.player);}
        }

        // Selecting the coin shadow for the bounce effect since it contains the whole coin
        let selectedCoinElement = e.target;
        let shadowElement = e.target;
        while(!/player/.test(selectedCoinElement.className)){
            selectedCoinElement = selectedCoinElement.parentElement;
            if(/coin-shadow/.test(selectedCoinElement.className)){
                shadowElement = selectedCoinElement;
            }
        }

        // Bounce Effect
        if(document.querySelector('.active')){document.querySelector('.active').classList.remove('active');}
        shadowElement.classList.add('active');

        // Setting up the element to transfer to the board
        setPlayer(props.player);
        setCoinSize(num);
        setCoinElement(document.querySelector(`.player-deck.${props.player} .coin-shadow-${num}`));
    }

    return (  
        <div className="player-deck-shadow">
            <div className={"player-deck " + props.player}>
                {playerWallet[props.player].map(playerCoin => (
                    <div key={playerCoin} className={"coin-shadow-" + String(playerCoin)} onClick={(e)=>{handleClick(e,playerCoin)}}>
                        <div className={"coin-" + playerCoin}>
                           <h1>{playerCoin}</h1>
                        </div>
                    </div>))}
            </div>
        </div>
    );
}


export default PlayerDeck;