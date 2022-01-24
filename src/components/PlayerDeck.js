import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerDeck = (props) => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement } = useContext(PlayerContext);

    const handleClick = (e, num) => {
        console.log('player-deck handleClicked');

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
    let walletSize = 5;
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