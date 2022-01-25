import { createContext, useEffect, useState } from "react";

export const TicTacContext = createContext();

const TicTacContextProvider = (props) => {
    const [p1Turn, setP1Turn] = useState(true);
    const [winner, setWinner] = useState(null);


    const [board, setBoard] = useState([[0,0],[0,0],[0,0],
                                        [0,0],[0,0],[0,0],
                                        [0,0],[0,0],[0,0]]);
    const [walletSize, setWalletSize] = useState(5);
    const [playerWallet, setPlayerWallet] = useState({'player-1':[], 'player-2':[]})

    // Win Conditions based on the board array
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    // Check if any of the conditions are met
    const checkWinner = () => {
        winConditions.forEach(cond => {
            console.log('win check');
            // Check if it has any coins
            if(board[cond[0]][0] && board[cond[1]][0] && board[cond[2]][0]){
                console.log('3 filled');
                // Check if all coins in the three positions belong to the same player
                if(board[cond[0]][0] === board[cond[1]][0]){
                    if(board[cond[1]][0] === board[cond[2]][0]){
                        return setWinner(board[cond[0]][0]);
                    }
                }
            }
        })
    }

    // Check if the move is valid
    const checkValid = (playerNum, coinSize, slotNum) => {
        if(playerNum === board[slotNum-1][0]){ return false }
        else if (coinSize <= board[slotNum-1][1]){ return false }
        else { return true }
    }


    return (  
        <TicTacContext.Provider value={{p1Turn, setP1Turn, checkValid, board, setBoard, winner, checkWinner, walletSize, setWalletSize, playerWallet, setPlayerWallet }}>
            {props.children}
        </TicTacContext.Provider>
    );
}
 
export default TicTacContextProvider;