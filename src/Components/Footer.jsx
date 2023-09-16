import React, { useContext } from "react";
import { ThemeContext } from "../Components/utils/global.context";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      style={{
        background: theme.navBackground,
        color: theme.color,
        borderColor: theme.borderColor,
      }}
    >
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
