import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TicTacContext } from "../contexts/TicTacContext";

const Header = () => {
    const { winner, p1Turn, setWinner, gameReset} = useContext(TicTacContext);
    const reset = () => {
        gameReset();
        setWinner(0);

        // Clearing the Board
        const slots = document.querySelectorAll('.slot')
        slots.forEach(slot => {
            if(/player-1/.test(slot.className)){slot.classList.remove('player-1')}
            else if(/player-2/.test(slot.className)){slot.classList.remove('player-2')}
            slot.innerHTML='';
        })
    }
    const viewBoard = () => {
        setWinner(-2);
    }
    const askRestartGame = () => {
        setWinner(-5);
    }
    const resumeGame = () => {
        setWinner(-0);
    }


    return (  
        <header>
            {p1Turn ? <div className="turn-signal"><h3 className="cross"><FontAwesomeIcon icon={faTimes} color='#31C2BD' size='lg'/></h3><h3>Turn</h3></div> 
                    : <div className="turn-signal"><h3><span className="circle"></span></h3><h3>Turn</h3></div>}

            <div className="title">
                <h1 className="title-cross"><FontAwesomeIcon icon={faTimes} color='#31C2BD' size='lg'/></h1>
                <h1 className="text-title">Tic Tac Toe</h1> 
                <span className="circle title-circle"></span>
            </div>

            <div className="reset-shadow">
                <button onClick={()=>askRestartGame()}><h2><FontAwesomeIcon icon={faRedo}/></h2></button>
            </div>


            {winner===1 &&  <div className="overlay">
                                <div className="end-message">
                                    <div className="centered">
                                        <h1><FontAwesomeIcon icon={faTimes} color='#31C2BD' size='lg'/></h1><h1>Takes the Round!</h1>
                                        <br />
                                        <div className="view-board">
                                            <button onClick={()=>viewBoard()}><h2>View Board</h2></button>
                                        </div>
                                        <div className="new-game">
                                            <button onClick={()=>reset()}><h2>New Game</h2></button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
            {winner===2 && <div className="overlay">
                                <div className="end-message">
                                    <div className="centered">
                                        <h1><span className="circle"></span></h1><h1>Takes the Round!</h1>
                                        <br />
                                        <div className="view-board">
                                            <button onClick={()=>viewBoard()}><h2>View Board</h2></button>
                                        </div>
                                        <div className="new-game">
                                            <button onClick={()=>reset()}><h2>New Game</h2></button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
            {winner===-1 && <div className="overlay">
                                <div className="end-message">
                                    <div className="centered">
                                        <h1>It's a Tie!</h1>
                                        <br />
                                        <div className="view-board">
                                            <button onClick={()=>viewBoard()}><h2>View Board</h2></button>
                                        </div>
                                        <div className="new-game">
                                            <button onClick={()=>reset()}><h2>New Game</h2></button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
            {winner===-5 && <div className="overlay">
                                <div className="end-message">
                                    <div className="centered">
                                        <h1>Restart Game?</h1>
                                        <br />
                                        <div className="view-board">
                                            <button onClick={()=>resumeGame()}><h2>No, Resume Game</h2></button>
                                        </div>
                                        <div className="new-game">
                                            <button onClick={()=>reset()}><h2>Yes, Restart Game</h2></button>
                                        </div> 
                                    </div>
                                </div>
                            </div>}
        </header>
    );
}
 
export default Header;