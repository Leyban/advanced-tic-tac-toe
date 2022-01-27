import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { TicTacContext } from "../contexts/TicTacContext";

const Header = () => {
    const { winner, p1Turn, setWinner, setWalletSize, gameReset} = useContext(TicTacContext);
    const reset = () => {
        gameReset();
        setWinner();

        // Clearing the Board
        const slots = document.querySelectorAll('.slot')
        slots.forEach(slot => {
            if(/player-1/.test(slot.className)){slot.classList.remove('player-1')}
            else if(/player-2/.test(slot.className)){slot.classList.remove('player-2')}
            slot.innerHTML='';
        })
    }


    return (  
        <header>
            <h1>Advanced</h1>
            <h1>Tic Tac Toe</h1>
            <button onClick={()=>reset()}><FontAwesomeIcon icon={faRedo} /></button>
            {winner===1 && <h1>Player 1 Wins</h1>}
            {winner===2 && <h1>Player 2 Wins</h1>}
            {winner===-1 && <h1>It's a Tie</h1>}
            {p1Turn ? <h1>left</h1> : <h1>right</h1>}
        </header>
    );
}
 
export default Header;