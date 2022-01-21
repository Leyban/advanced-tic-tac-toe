import { useContext, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerDeck = (props) => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement } = useContext(PlayerContext);


    useEffect(() => {
        const coins = document.querySelectorAll(`.player-deck.${props.player} div`);

        // coin listeners
        for (let coin of coins) {
            coin.addEventListener('dragstart', dragStart);
            coin.addEventListener('dragend', dragEnd);
        }

        // Drag Functions
        function dragStart(e) {
            e.dataTransfer.setData("player", props.player);
            e.dataTransfer.setData("coin", `.${e.target.parentElement.classList[0]}.${e.target.parentElement.classList[1]} .${e.target.className}`);
            e.dataTransfer.effectAllowed = "move";


            console.log('dragStart', this.className);
        }
        function dragEnd() {
            console.log('dragEnd', this.className);
        }

    },[])


    return (  
        <div className={"player-deck" + ' ' + props.player}>
            <div className="coin-5" draggable='true'><h1>5</h1></div>
            <div className="coin-4" draggable='true'><h1>4</h1></div>
            <div className="coin-3" draggable='true'><h1>3</h1></div>
            <div className="coin-2" draggable='true'><h1>2</h1></div>
            <div className="coin-1" draggable='true'><h1>1</h1></div>
            
        </div>
    );
}
 
export default PlayerDeck;