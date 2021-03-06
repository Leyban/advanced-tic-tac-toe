import { createContext, useState } from "react";

export const TicTacContext = createContext();

const TicTacContextProvider = (props) => {
    const [p1Turn, setP1Turn] = useState(true);
    const [winner, setWinner] = useState(0);
    const [board, setBoard] = useState([[0,0],[0,0],[0,0],
                                        [0,0],[0,0],[0,0],
                                        [0,0],[0,0],[0,0]]);
    const [walletSize, setWalletSize] = useState(5);
    const [score, setScore] = useState([0,0,0]);

    let allowance = [];
    for (let i = walletSize; i >= 1; i-- ){
        allowance.push(i);
    }

    const [playerWallet, setPlayerWallet] = useState({'player-1': allowance , 'player-2': allowance})

    const gameReset=()=>{
        let newAllowance = [];
        let playerWalletPlaceholder = playerWallet;
        for (let i = walletSize; i >= 1; i-- ){
            newAllowance.push(i);
        }
        playerWalletPlaceholder['player-1'] = newAllowance;
        playerWalletPlaceholder['player-2'] = newAllowance;
        setPlayerWallet(playerWalletPlaceholder);

        setBoard([  [0,0],[0,0],[0,0],
                    [0,0],[0,0],[0,0],
                    [0,0],[0,0],[0,0]   ])
    }

    // A function that will tell if a player can pass or not
    // Only applicable on larger coin set so nevermind this
    // const canPass = () => {
    //     return false;
    // }

    // Check if the game should end in a tie
    const checkTie = () => {
        const largestP1 = playerWallet['player-1'].reduce((a,b) => { return Math.max(a,b) },-1);
        const largestP2 = playerWallet['player-2'].reduce((a,b) => { return Math.max(a,b) },-1);

        const slotsForP1 = board.filter(oneSlot => oneSlot[0]!==1);
        const slotsForP2 = board.filter(oneSlot => oneSlot[0]!==2);

        if(slotsForP1.every(oneSlot => oneSlot[1]>=largestP1)){
            if(slotsForP2.every(oneSlot => oneSlot[1]>=largestP2)){
                let scoreCopy = score;
                scoreCopy[0]++;
                setScore(scoreCopy);
                return setWinner(-1);
            }
        }
    }

    // Win Conditions based on the board array
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    // Check if any of the conditions are met
    const checkWinner = () => {
        winConditions.forEach(cond => {
            // Check if it has any coins
            if(board[cond[0]][0] && board[cond[1]][0] && board[cond[2]][0]){
                // Check if all coins in the three positions belong to the same player
                if(board[cond[0]][0] === board[cond[1]][0]){
                    if(board[cond[1]][0] === board[cond[2]][0]){
                        // Making the winning coins bounce
                        const coin1 = document.querySelector(`.slot-${cond[0]+1}>div`);
                        const coin2 = document.querySelector(`.slot-${cond[1]+1}>div`);
                        const coin3 = document.querySelector(`.slot-${cond[2]+1}>div`);
                        coin1.classList.add('active');
                        coin2.classList.add('active');
                        coin3.classList.add('active');

                        // Score and Winner Update
                        let scoreCopy = score;
                        scoreCopy[board[cond[0]][0]]++;
                        setScore(scoreCopy);
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
        <TicTacContext.Provider value={{p1Turn, setP1Turn, checkValid, board, setBoard, winner, setWinner, 
                                        checkWinner, checkTie, walletSize, setWalletSize, playerWallet, 
                                        setPlayerWallet, gameReset, score, setScore}}>
            {props.children}
        </TicTacContext.Provider>
    );
}
 
export default TicTacContextProvider;