import { createContext, useState } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const [player, setPlayer] = useState('');
    const [coinSize, setCoinSize] = useState(null);
    const [coinElement, setCoinElement] = useState(null);

    const shakeCoin = (component,num,wrongplayer) => {
        let pos = 0;
        let id = null;
        let elem = null;
        if (component === 'board'){
            elem = document.querySelector(`.slot-${num}`).firstChild;
        } else {
            elem = document.querySelector(`.player-deck.${wrongplayer} .coin-shadow-${num}`);
        }
           
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            if (pos == 100) {
                elem.style.marginLeft = '';
                elem.style.marginRight = '';
                clearInterval(id);
            } else if (pos < 25) {
                pos++; 
                elem.style.marginLeft = pos + "px"; 
            } else if (pos < 50) {
                pos++; 
                elem.style.marginLeft = String(25 - (pos - 25)) + "px"; 
            } else if (pos < 75) {
                pos++; 
                elem.style.marginRight = String(pos - 50) + "px"; 
            } else if (pos < 100) {
                pos++; 
                elem.style.marginRight = String(25 - (pos - 75)) + "px"; 
            }
        }
    }

    return (  
        <PlayerContext.Provider value ={{ player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement, shakeCoin }}>
            {props.children}
        </PlayerContext.Provider>
    );
}
 
export default PlayerContextProvider;