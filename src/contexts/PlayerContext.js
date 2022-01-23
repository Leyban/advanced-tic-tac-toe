import { createContext, useState, useContext } from "react";
import { TicTacContext } from "../contexts/TicTacContext";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const {p1Turn, setP1Turn, checkValid, board, setBoard} = useContext(TicTacContext);

    const [player, setPlayer] = useState('');
    const [coinSize, setCoinSize] = useState(null);
    const [coinElement, setCoinElement] = useState(null);

    const slotClick = (slotNum) => {
        console.log('slotClicked')
        if (!coinElement){return;}

        let playerNum=0;
        if(player === 'player-1'){playerNum = 1}
        else{playerNum = 2};
        console.log(board);
        if(!checkValid(playerNum, coinSize, slotNum)){return;}
        else{
            setBoard(board.splice(slotNum-1,1,[playerNum,coinSize]));
            console.log(board);

            const slot = document.querySelector(`.slot-${slotNum}`);
            slot.className = 'slot ' + `slot-${slotNum} ` + player;
            slot.innerHTML = '';
            slot.append(coinElement);

            setPlayer('');
            setCoinSize(null);
            setCoinElement(null);
            console.log(board);
        }

        
    }

    return (  
        <PlayerContext.Provider value ={{ player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement, slotClick }}>
            {props.children}
        </PlayerContext.Provider>
    );
}
 
export default PlayerContextProvider;