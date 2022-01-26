import { useHistory } from "react-router-dom";

const Reset = () => {
    const history = useHistory();
    const resettaStone = () => {
        history.push('/');
    }
    return resettaStone();
}
 
export default Reset;