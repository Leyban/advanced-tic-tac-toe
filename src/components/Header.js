import { useContext } from "react";
import { TicTacContext } from "../contexts/TicTacContext";

const Header = () => {
    const { winner, p1Turn } = useContext(TicTacContext);
    return (  
        <header>
            <h1>Advanced</h1>
            <h1>Tic Tac Toe</h1>
            <button>Start</button>
            {winner && <h1>Win</h1>}
            {p1Turn ? <h1>left</h1> : <h1>right</h1>}
        </header>
    );
}
 
export default Header;