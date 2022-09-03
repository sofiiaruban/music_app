import React, { Dispatch } from 'react';
import './App.css';
import Auth from './components/pages/Auth';
import Dashboard from "./components/pages/Dashboard";
import Finalscore from './components/pages/Finalscore';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route } from 'react-router-dom';
import {createContext, useMemo, useState} from 'react';
import {ScoreContext, NameContext} from "./components/Interfaces";



export const FinalScoreContext = createContext<ScoreContext>({
  totalScore: 0,
  setTotalScore: () =>  {},

})

export const UserNameContext = createContext<NameContext>({
  name: '', 
  setName: () =>  {},
})

function App(){
  
  const [totalScore, setTotalScore] = useState<number>(0);
    
    const finalScoreMemo = useMemo(
      () => ({totalScore, setTotalScore}),
      [totalScore]
    );

  const [name, setName] = useState<string>('');

  const UserNameMemo = useMemo(
    () => ({name, setName}),
    [name]
  );

  return (
    <Router>
      <UserNameContext.Provider value={UserNameMemo}>
        <FinalScoreContext.Provider value={finalScoreMemo}>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/finalscore" element={<Finalscore />} />
          </Routes>
        </FinalScoreContext.Provider>
      </UserNameContext.Provider>
    </Router>
  );
}

export default App;
