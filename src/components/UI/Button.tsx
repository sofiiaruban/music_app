import {Props} from "../Interfaces";
  
  const Button: React.FC<Props> = ({ 
      btnClass,
      children,
      onClick,
      disabledBtn,
      typeBtn 
    }) => { 
    return (
      <button 
        className={btnClass}
        onClick={onClick}
        disabled = {disabledBtn}
        type={typeBtn}
      >
      {children}
      </button>
    );
  }
  
  export default Button;