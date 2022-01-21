import { createContext, useState } from "react";

export const TicTacContext = createContext();

const TicTacContextProvider = (props) => {
    const [p1Turn, setP1Turn] = useState(true);
    const [gameEnd, setGameEnd] = useState(false);
    

    return (  
        <TicTacContext.Provider value={{p1Turn, gameEnd, setP1Turn, setGameEnd}}>
            {props.children}
        </TicTacContext.Provider>
    );
}
 
export default TicTacContextProvider;