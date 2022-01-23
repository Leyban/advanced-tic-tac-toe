import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";


const GameBoard = () => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement, slotClick } = useContext(PlayerContext);


    const handleClick = (slotNum) => {
        console.log('gameboard handleClicked');
        slotClick(slotNum);
    }

    return (  
        <div className="game-board">
            <div className="container">
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(1)}></div><div className="slot slot-1"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(2)}></div><div className="slot slot-2"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(3)}></div><div className="slot slot-3"></div></div>
                
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(4)}></div><div className="slot slot-4"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(5)}></div><div className="slot slot-5"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(6)}></div><div className="slot slot-6"></div></div>

                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(7)}></div><div className="slot slot-7"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(8)}></div><div className="slot slot-8"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(9)}></div><div className="slot slot-9"></div></div>
            </div>
        </div>
    );
}
 
export default GameBoard;