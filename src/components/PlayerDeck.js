import { useContext, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { TicTacContext } from "../contexts/TicTacContext";

const PlayerDeck = (props) => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement, shakeCoin } = useContext(PlayerContext);
    const { p1Turn, walletSize, setWalleSize, playerWallet, setPlayerWallet } = useContext(TicTacContext);

    useEffect(()=>{
        let allowance = [];
        let playerWalletPlaceholder = playerWallet;
        for (let i = 1; i <= walletSize; i++ ){
            allowance.push(i);
        }
        playerWalletPlaceholder[props.player] = allowance;

        setPlayerWallet(playerWalletPlaceholder);
    },[]);


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

    const coinStack = [];
    for(let i=walletSize; i>0; i--){
        coinStack.push(<div key={i} className={"coin-shadow-" + String(i)} onClick={(e)=>{handleClick(e,i)}}><div className={"coin-" + i}><h1>{i}</h1></div></div>)
    }

    return (  
        <div className="player-deck-shadow">
            <div className={"player-deck " + props.player}>
                {coinStack}
            </div>
        </div>
    );
}


export default PlayerDeck;