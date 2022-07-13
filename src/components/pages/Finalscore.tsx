import { useContext } from "react";
import {FinalScoreContext} from "../../App";
import logo from "../../imgs/logo.svg";
import { UserNameContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

function Finalscore() {
    const navigate = useNavigate();
    const {totalScore} = useContext(FinalScoreContext);
    const {name} = useContext(UserNameContext);

    function tryAgainBtnHandler() {
        navigate('/dashboard');
    }
    const storedTotalScore = sessionStorage.getItem('totalScore');
    const finalScore = (totalScore) ? totalScore : Number(storedTotalScore);
    const userName = (name) ? name : sessionStorage.getItem('name');

    function getScoreMessage(score: number) {
        if (score === 12) {
            return (
                <>
                    <h2>{userName}, did so great!</h2>
                    <p>You have got 12 out of 12 points</p>
                </>
            )
        }

        return (
            <>
                <h2>{userName}, you can do better, try again!</h2>
                <p>You have got {finalScore} out of 12 points</p>
            </>
        )
    }

    return (
    <div className="wrapper ">
        <img src={logo} alt="logo" className ="logo"/>
        <div className="final-result-card">
           <div className="card">
               <div className="final-score-wrapper">
                   <div className="final-score">
                       <span>{finalScore}</span>
                    </div>
                </div>
                <div className="score-message">
                { getScoreMessage(finalScore) }
                </div>   
                <div className="btn-center">
                    <Button btnClass={"active-btn"} onClick={tryAgainBtnHandler}>Try again</Button>
                </div>
            </div>   
        </div>
    </div>)
}
export default Finalscore;



