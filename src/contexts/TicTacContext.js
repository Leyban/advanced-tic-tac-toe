import { createContext, useState } from "react";

export const TicTacContext = createContext();

const TicTacContextProvider = (props) => {
    const [p1Turn, setP1Turn] = useState(true);
    const [board, setBoard] = useState([[0,0],[0,0],[0,0],
                                        [0,0],[0,0],[0,0],
                                        [0,0],[0,0],[0,0]])
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const checkValid = (playerNum, coinSize, slotNum) => {
        if(playerNum === board[slotNum-1][0]){ return false }
        else if (coinSize < board[slotNum-1][1]){ return false }
        else { return true }
    }


    return (  
        <TicTacContext.Provider value={{p1Turn, setP1Turn, checkValid, board, setBoard}}>
            {props.children}
        </TicTacContext.Provider>
    );
}
 
export default TicTacContextProvider;