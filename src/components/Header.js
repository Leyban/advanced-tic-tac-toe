import { useContext } from "react";
import { TicTacContext } from "../contexts/TicTacContext";

const Header = () => {
    const { winner } = useContext(TicTacContext);
    return (  
        <header>
            <h1>Advanced</h1>
            <h1>Tic Tac Toe</h1>
            <button>Start</button>
            {winner && <h1>Win</h1>}
        </header>
    );
}
 
export default Header;