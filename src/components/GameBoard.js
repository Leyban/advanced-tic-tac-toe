import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { TicTacContext } from "../contexts/TicTacContext";


const GameBoard = () => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement } = useContext(PlayerContext);
    const {p1Turn, setP1Turn, checkValid, board, setBoard, checkWinner } = useContext(TicTacContext);
    // let board = [   [0,0],[0,0],[0,0],
    //                 [0,0],[0,0],[0,0],
    //                 [0,0],[0,0],[0,0]   ];
    
    // const checkValid = (playerNum, coinSize, slotNum) => {
    //     if(playerNum === board[slotNum-1][0]){ return false }
    //     else if (coinSize < board[slotNum-1][1]){ return false }
    //     else { return true }
    // }

    const handleClick = (slotNum) => {
        console.log('gameboard handleClicked');

        console.log('slotClicked')
        if (!coinElement){return;}

        let playerNum=0;
        if(player === 'player-1'){playerNum = 1}
        else{playerNum = 2};
        if(!checkValid(playerNum, coinSize, slotNum)){return;}
        else{
            let newBoard = board;
            newBoard.splice(slotNum-1,1,[playerNum,coinSize])
            setBoard(newBoard);

            // Saving on local board

            // Removing the coin from the deck
            const coinNode = document.querySelector(`.player-deck.${player} .coin-shadow-${coinSize}`);
            coinNode.parentNode.removeChild(coinNode);

            // Creating the coin for the board
            const coinShadow = document.createElement("div");
            coinShadow.className = `coin-shadow-${coinSize} active`;
            const coinToTransfer = document.createElement("div");
            coinToTransfer.className = `coin-${coinSize}`;
            const coinH1 = document.createElement("h1");
            const coinText = document.createTextNode(`${coinSize}`);
            coinH1.appendChild(coinText);
            coinToTransfer.appendChild(coinH1);
            coinShadow.appendChild(coinToTransfer);

            // Placing the coin in the board
            const slotNode = document.querySelector(`.slot-${slotNum}`);
            slotNode.className = 'slot ' + `slot-${slotNum} ` + player;
            slotNode.innerHTML = '';
            slotNode.appendChild(coinShadow);

            checkWinner();

            setPlayer('');
            setCoinSize(null);
            setCoinElement(null);
        }
    }

    let slotElements = [];
    for (let i = 1; i < 10; i++) {
        slotElements.push(<div className="slot-shadow" key={i}>
                            <div className={'slot slot-' + String(i)} onClick={()=>handleClick(i)}></div>
                        </div>);
    }

    return (  
        <div className="game-board">
            <div className="container">
                {slotElements}
            </div>
        </div>
    );
}
 
export default GameBoard;