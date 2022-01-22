import { useEffect, useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const GameBoard = () => {
    const { player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement } = useContext(PlayerContext);

    const handleClick = (e, num) => {
        console.log('gameboard handleClicked')
        if (!coinElement){return () => {
            setPlayer('');
            setCoinSize(null);
            setCoinElement(null);
            }
        }

        
        const slot = document.querySelector(`.slot-${num}`);
        console.log(slot);
        slot.className = 'slot ' + `slot-${num} ` + player;
        slot.innerHTML = '';
        slot.append(coinElement);




        setPlayer('');
        setCoinSize(null);
        setCoinElement(null);

    }

    return (  
        <div className="game-board">
            <div className="container">
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(e,1)}></div><div className="slot slot-1"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(e,2)}></div><div className="slot slot-2"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(e,3)}></div><div className="slot slot-3"></div></div>
                
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(e,4)}></div><div className="slot slot-4"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(e,5)}></div><div className="slot slot-5"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(e,6)}></div><div className="slot slot-6"></div></div>

                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(e,7)}></div><div className="slot slot-7"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(e,8)}></div><div className="slot slot-8"></div></div>
                <div className="slot-shadow"><div className="slot-overlay" onClick={(e)=>handleClick(e,9)}></div><div className="slot slot-9"></div></div>
            </div>
        </div>
    );
}
 
export default GameBoard;