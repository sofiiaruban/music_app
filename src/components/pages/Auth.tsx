
import { useNavigate } from "react-router-dom";
declare var require: any;
const logo: string = require("../../imgs/logo.svg").default;

import React, {FormEvent, useContext, useState} from "react";
import { UserNameContext } from "../../App";
import Button from "../UI/Button";

function Auth() {
  const navigate = useNavigate();
  const {name, setName} = useContext(UserNameContext);
  const [activeBtn, setActiveBtn] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.currentTarget.value);  
    sessionStorage.setItem('name', e.currentTarget.value);
  }

  const handleFocus = () => {
    setDisable(false);
    setActiveBtn(true);
  }
  const handleBlur = ()=>{
    setActiveBtn(false);
  }

  const submitHandler = (e: FormEvent) => {
      e.preventDefault();
      navigate('/dashboard');
  }
    return (
      <div className="wrapper wrapper-auth">
        <img src={logo} alt="logo" className="logo"/>
        <div className="login-wrapper">
          <div className="card">
          <h1>Welcome!</h1>
          <p>Please enter your name and lets start our quiz!</p>
          <form onSubmit={submitHandler}>
              <input type="text" value={name} placeholder="Type your name here..." required  onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
              <div className="btn-center">
                <Button typeBtn={"submit"} btnClass={activeBtn ? 'active-btn' : 'disabled-btn'} disabledBtn={disable}>Start quiz</Button>
              </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
  
export default Auth;
  