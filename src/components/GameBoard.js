import { useEffect, useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const GameBoard = () => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement } = useContext(PlayerContext);


    const slots = document.querySelectorAll('.game-board .slot')

    // loop through slots and add listeners
    for (let slot of slots) {
        slot.addEventListener('dragover', dragOver);
        slot.addEventListener('dragenter', dragEnter);
        slot.addEventListener('dragleave', dragLeave);
        slot.addEventListener('drop', dragDrop);
    }

    // Drag Functions
    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragLeave() {
    }

    function dragDrop() {
        if (player) {
            this.innerHTML = coinElement;
        }

        setPlayer('');
        setCoinSize('');
        setCoinElement('');
    
    }


    return (  
        <div className="game-board">
            <div className="container">
                <div className="slot" draggable='false'></div>
                <div className="slot" draggable='false'></div>
                <div className="slot" draggable='false'></div>
                
                <div className="slot" draggable='false'></div>
                <div className="slot" draggable='false'></div>
                <div className="slot" draggable='false'></div>

                <div className="slot" draggable='false'></div>
                <div className="slot" draggable='false'></div>
                <div className="slot" draggable='false'></div>
            </div>
        </div>
    );
}
 
export default GameBoard;