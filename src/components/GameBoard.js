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
        e.dataTransfer.dropEffect = "move"
    }

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList += ' hovered';
    }

    function dragLeave(e) {
        if ((/hovered/).test(e.target.className)){e.target.className = e.target.className.slice(0,e.target.className.length-8)}
    }

    function dragDrop(e) {
        e.preventDefault();
        if ((/hovered/).test(e.target.className)){e.target.className = e.target.className.slice(0,e.target.className.length-8)}
        const coin = e.dataTransfer.getData("coin");
        console.log(document.querySelector(coin));
        e.target.append(document.querySelector(coin));

        const player = e.dataTransfer.getData("player");
        e.target.className = `slot ${player}`;

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