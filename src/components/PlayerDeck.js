import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerDeck = (props) => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement, slotClick } = useContext(PlayerContext);

    const handleClick = (e, num) => {
        console.log('player-deck handleClicked');
        let selectedCoinElement = e.target;
        let shadowElement = e.target;

        while(!/player/.test(selectedCoinElement.className)){
            selectedCoinElement = selectedCoinElement.parentElement;
            if(/coin-shadow/.test(selectedCoinElement.className)){
                shadowElement = selectedCoinElement;
            }
        }
        if(/slot/.test(selectedCoinElement.className)){
            const slotNum = selectedCoinElement.className.match(/\d/);
            return slotClick(slotNum);
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
            <div className={"player-deck" + ' ' + props.player}>
                <div className="coin-shadow-5" onClick={(e)=>{handleClick(e,5)}}><div className="coin-5"><h1>5</h1></div></div>
                <div className="coin-shadow-4" onClick={(e)=>{handleClick(e,4)}}><div className="coin-4"><h1>4</h1></div></div>
                <div className="coin-shadow-3" onClick={(e)=>{handleClick(e,3)}}><div className="coin-3"><h1>3</h1></div></div>
                <div className="coin-shadow-2" onClick={(e)=>{handleClick(e,2)}}><div className="coin-2"><h1>2</h1></div></div>
                <div className="coin-shadow-1" onClick={(e)=>{handleClick(e,1)}}><div className="coin-1"><h1>1</h1></div></div>
            </div>
        </div>
    );
}
 
export default PlayerDeck;