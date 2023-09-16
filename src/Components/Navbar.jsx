import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./utils/global.context";
import styles from '../styles/card.module.css'

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <nav style={{ background: theme.navBackground, color: theme.color ,borderColor:theme.borderColor}}>
      <div style={{textAlign:"left"}} >
        <Link to="/home" style={{ color: theme.color }}>
          <h1>D<span style={{color:'#ec183f'}}>H</span> Odonto</h1>
        </Link>
        </div>
    <div >
    <ul>
          <li>
            <Link to="/home" style={{ color: theme.color }}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: theme.color }}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/favs" style={{ color: theme.color }}>
              Favoritos
            </Link>
          </li>
        </ul>
    </div>

        <div style={{textAlign:"right"}}>
        <button onClick={handleChangeTheme} class={styles.buttonTheme} style={{ background: theme.navBackground}}>{theme.isLight ? '🔅' : '🌙'}</button>
        </div>
        
        
      
    </nav>
  );
};

export default Navbar;
