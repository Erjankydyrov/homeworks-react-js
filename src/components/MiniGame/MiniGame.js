import {useEffect} from "react";
import classes from "./MiniGame.module.css";

const MiniGame  = ({miniGame, setMiniGame})=>{
    useEffect(function() {
    if(!miniGame)return;

    const interval = setInterval(() => {
    setMiniGame(miniGame - 1)
    },1000)
    
    return () => clearInterval(interval);
}, [miniGame])

    return(
    <div className={classes.MiniGame}>
        {miniGame}
    </div>
)}
export default MiniGame;