import { Dispatch } from "react";

export interface ScoreContext {
    totalScore: number,
    setTotalScore: Dispatch<React.SetStateAction<number>>,
}

export interface NameContext {
    name: string, 
    setName:  Dispatch<React.SetStateAction<string>>,
}

export interface GeneralData {
    id: string;
    genre: string;
    data: Array<DataObj>;
}

export interface DataObj {
    audio: string | undefined;
    description: string;
    id: string;
    image: string;
    name: string;
    songTitle: string;
}

export interface Props {
    btnClass: string |  undefined;
    children?: React.ReactNode;
    onClick?: () => void;
    disabledBtn?: boolean;
    typeBtn?: "button" | "submit" ;
}

  

