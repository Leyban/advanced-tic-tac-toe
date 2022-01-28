import { useContext } from "react";
import { TicTacContext } from "../contexts/TicTacContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const { score } = useContext(TicTacContext);

    return(
        <footer>
            <div className="scoreboard">
                <div className="player-1-score-shadow">
                    <div className="player-1-score">
                        <h3><FontAwesomeIcon icon={faTimes} color='rgb(30,54,64)' size='lg'/></h3>
                        <h2>{score[1]}</h2>
                    </div> 
                </div>
                <div className="tie-score-shadow">
                    <div className="tie-score">
                        <h3>TIE</h3>
                        <h2>{score[0]}</h2>
                    </div>
                </div>
                <div className="player-2-score-shadow">
                    <div className="player-2-score">
                        <h3><span className="circle"></span></h3>
                        <h2>{score[2]}</h2>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;