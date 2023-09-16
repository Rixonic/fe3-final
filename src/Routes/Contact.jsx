import React, { useContext } from "react";
import Form from "../Components/Form";
import { ThemeContext } from "../Components/utils/global.context";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main
      style={{
        background: theme.mainBackground,
        color: theme.color,
        borderColor: theme.borderColor,
      }}
    >
      <div>
        <h2>Quieres saber mas?</h2>
        <p>Envianos su consulta y lo contactaremos</p>
      </div>

      <Form />
    </main>
  );
};

export default Contact;
