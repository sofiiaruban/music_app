import { useEffect, useRef } from "react";


function Player(props: {audio: string | undefined}) {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(()=>{
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [props]);
    
    return (
        <div className="audio-player">
                <audio ref={audioRef} controls>
                <source src={"https://levi9-song-quiz.herokuapp.com/api/" + props?.audio} type="audio/mpeg"/>
                </audio>
        </div>
    )


}

export default Player;