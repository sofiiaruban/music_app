import { useEffect, useState } from "react";
import {GeneralData} from "./Interfaces"


function useFetchData(url:string) {
    
  const [musicData, setMusicData] = useState<GeneralData[]>([]);

        useEffect(() => {
            fetch("https://levi9-song-quiz.herokuapp.com/api/data")
                .then((res) => res.json())
                .then((responseData) => {
                    setMusicData(responseData);   
            });

   }, [])
 
   return {musicData}; 
}

export default useFetchData;
