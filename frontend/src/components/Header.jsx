import React, { useContext } from 'react';
import header from  '../scss/header.module.scss'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { DarkModeContext } from '../App'; 

function Header(props) {
    const {toggleMode} = props
    const modeContext = useContext(DarkModeContext)

    return (
      <header className={header.header}>
        <h1 className={header.welcome}>Welcome!</h1>
        <button onClick={() => toggleMode(!modeContext)} className={header.button}>
                {modeContext 
                ?<MdOutlineLightMode size={25}/> 
                : <MdOutlineDarkMode size={25}/>
            }
        </button>
      </header>
    );
}

export default Header;
