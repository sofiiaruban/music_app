import {GeneralData} from "../Interfaces";
import arrow from "../../imgs/arrow-icon.svg";

//background: linear-gradient(270deg, rgba(255, 255, 255, 0) 74.64%, #FFFFFF 87.86%), rgba(255, 255, 255, 0.2);
//background: linear-gradient(270.05deg, rgba(126, 85, 179, 0) 73.26%, #A769C4 85%, #A769C4 99.71%), rgba(255, 255, 255, 0.2);
//linear-gradient(270.05deg, rgba(126, 85, 179, 0) 73.26%, #A769C4 85%, #A769C4 99.71%), linear-gradient(270deg, rgba(255, 255, 255, 0) 48.96%, #FFFFFF 75.09%), rgba(255, 255, 255, 0.2);
//
function ProgressBar(props: {data: GeneralData[]}) {
    
    return (
        <ul className="player-progress"> {
            props.data.map((item) =>
            <li key={item.id}>{item.genre}  <img src={arrow} alt="arrow icon" /></li>
            )
        }
        </ul>
    )
}

export default ProgressBar;