import { render } from "@testing-library/react";
import logo from "../../imgs/logo.svg";
import arrow from "../../imgs/arrow.svg"
import { useState, useMemo, useContext} from "react";
import {FinalScoreContext} from "../../App";
import { UserNameContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import {GeneralData, DataObj} from "../Interfaces";
import useFetchData from "../UseFetchData";
import React from "react";
import ProgressBar from "../UI/ProgressBar";
import Player from "../UI/Player";

function Dashboard() {
    const {musicData} = useFetchData("https://levi9-song-quiz.herokuapp.com/api/data"); 
    const [genreIndex, setGenreIndex] = useState<number>(0);
    const [attempts, setAttempts] = useState<number>(1);
    const [score, setScore] = useState<number>(0);
    const [rightAnswer, setRightAnswer] = useState<boolean>(false);
    const [scoreArr, setScoreArr] = useState<Array<number>>([]);
    const {totalScore, setTotalScore} = useContext(FinalScoreContext);
    const {name}= useContext(UserNameContext);
    const navigate = useNavigate();
    const [disable, setDisable] = useState<boolean>(true);
    const [activeBtn, setActiveBtn] = useState<boolean>(false);

    const randomSongData  = useMemo(()=> {
        if (musicData.length) {
            return musicData[genreIndex].data[Math.floor(Math.random() * musicData[genreIndex].data.length)];
        }
        return undefined;
    }, [genreIndex, musicData]);

    console.log(musicData);

    function getScore(attempt:number) {
        let score = 0;
        switch (attempt) {
            case 1:
                score = 3;
                break;
            case 2:
                score = 2;
                break;
            case 3:
                score = 1;
                break;
            default:
                score = 0;
        }
        return score;
    }
    
    // event handlers
   
  
 
    function answerHandler(e: React.MouseEvent<HTMLLIElement>) {
        setAttempts((atts) => atts + 1);
        const answer = e.currentTarget;
        
            if (answer.dataset.id == randomSongData?.id) {
                answer.className="right";
                setRightAnswer(true);
                let score:number = getScore(attempts);
                setScore(score);
                setAttempts(1);
                setDisable(false);
                setActiveBtn(true);
            }  else {
                
                return answer.className="wrong";
            }
            
        
       
    }

    function nextBtnHandler() {        
        setScoreArr((scoreArr)=>[...scoreArr, score]);
        setRightAnswer(false);
        setActiveBtn(false);
        setGenreIndex(genreIndex + 1);
        setScore(0);
    }

    function countTotalScore(scores:number[]) {
        return scores.reduce((prevItem, currentItem) => prevItem + currentItem);
    }

    function seeScoreBtnHandler(){
        const totalScore = countTotalScore([...scoreArr, score]);
        setTotalScore(totalScore);
        sessionStorage.setItem('totalScore', JSON.stringify(totalScore));
        navigate('/finalscore');
    }
   
     // switch class desc block     
    let classDescriptionBlock = "description-block";

     if (rightAnswer) {
         classDescriptionBlock ="show";
        
    }
     // switch btn
    let btnClass = 'disabled-btn';
  
    if (activeBtn) {

       btnClass = 'active-btn';
    }
     
    if(!musicData.length) {
        return <div>Loading...</div>
    }

    return (
        <div className="wrapper"> 
            <header>
                <img src={logo} alt="logo"/>
                <div className="player-results">
                    <span className="player-name">{(name) ? name : sessionStorage.getItem('name')}</span>
                    <span className="player-score">You score: {score}</span>
                </div>
            </header>
            <div className="container default-background-img">
                <ProgressBar data={musicData}/>
                <div className="main-content">
                    <aside>
                        <h2>{musicData[genreIndex].genre} song</h2>
                        <p>Listen to the audio and guess what song is it from the list</p>
                        <Player audio={randomSongData?.audio}/>
                        <ul className="answers">{
                            musicData[genreIndex].data.map((item: DataObj) => 
                            <li key={item.id} data-id={item.id} onClick={answerHandler}>
                                <div className="circle"></div> {"0" + item.id[2] + ":"} {item.name} - {item.songTitle}
                            </li>)}
                        </ul>
                    </aside>
                    <div className = {classDescriptionBlock}>
                        <h3>{randomSongData?.name} - {randomSongData?.songTitle}</h3>
                        <figure>
                            <img src={"https://levi9-song-quiz.herokuapp.com/api/" + randomSongData?.image}
                                className="desr-img" alt="song image" />
                            <Player audio={randomSongData?.audio}/>
                        </figure>
                        <p className="desc-text">{randomSongData?.description.substring(0, 120) + "..."}</p>
                    </div>
                </div>
            </div>
            <div className="next-button">
                <Button 
                    btnClass={"next-btn "+ btnClass}
                    disabledBtn={disable}
                    onClick={(genreIndex < 3) ? nextBtnHandler : seeScoreBtnHandler}>{(genreIndex < 3) ? "Next Question" : "See My Score"}
                </Button>
            </div>
        </div>
    );
};

export default Dashboard;