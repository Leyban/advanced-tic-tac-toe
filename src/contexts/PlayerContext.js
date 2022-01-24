import { createContext, useState } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const [player, setPlayer] = useState('');
    const [coinSize, setCoinSize] = useState(null);
    const [coinElement, setCoinElement] = useState(null);


    return (  
        <PlayerContext.Provider value ={{ player, setPlayer, coinSize, setCoinSize, coinElement, setCoinElement}}>
            {props.children}
        </PlayerContext.Provider>
    );
}
 
export default PlayerContextProvider;