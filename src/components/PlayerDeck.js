import { useContext, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const PlayerDeck = (props) => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement } = useContext(PlayerContext);


    useEffect(() => {
        const coins = document.querySelectorAll(`.player-deck.${props.player} div`);
        let coinReturn = '';

        // coin listeners
        for (let coin of coins) {
            coin.addEventListener('dragstart', dragStart);
            coin.addEventListener('dragend', dragEnd);
        }

        // Drag Functions
        function dragStart() {
            coinReturn = this.className;
            setTimeout(() => {this.className = 'invisible'}, 0);
            
            setPlayer(props.player);
            setCoinSize(coinReturn);
            setCoinElement(`<div class='${this.className}'><h1>${this.className[this.className.length-1]}</h1></div>`);

            console.log('dragStart', this.className);
        }
        function dragEnd() {
            this.className = coinReturn;
            console.log('dragEnd', this.className);

            setPlayer('');
            setCoinSize('');
            setCoinElement('');
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