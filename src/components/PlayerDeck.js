import { useContext, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerDeck = (props) => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement } = useContext(PlayerContext);

    const handleClick = (e, num) => {
        console.log('player-deck handleClicked');
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