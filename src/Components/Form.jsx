import React, { useState, useContext } from "react";
import { ThemeContext } from "../Components/utils/global.context";
import styles from "../styles/form.module.css";

const validateName = (name) => {
  const withoutSpaces = name.trim();

  if (withoutSpaces.length > 5) {
    return true;
  } else {
    return false;
  }
};

const validateMail = (mail) => {
  if (mail.includes(" ")) {
    return false;
  }

  if (!mail.includes("@")) {
    return false;
  }

  if (mail.slice(-1) === ".") {
    return false;
  }

  return true;
};

const Form = () => {
  const { theme } = useContext(ThemeContext);
  //Aqui deberan implementar el form completo con sus validaciones
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const onChangeMail = (e) => setMail(e.target.value);
  const onChangeName = (e) => setName(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const isNameValid = validateName(name);
    const isMailValid = validateMail(mail);
    if (isMailValid && isNameValid) {
      setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
      console.log(name);
      console.log(mail);
    } else {
      setMessage("Error en alguno de los datos");
    }
  };

  return (
    <div
      class={styles.mainForm}
      style={{
        background: theme.cardBackground,
        boxShadow: theme.shadowOff,
        borderColor: theme.borderColor,
      }}
    >
      <h1>Contactenos!</h1>
      <form onSubmit={onSubmitForm}>
        <h3>Mail:</h3>
        <input
          type="text"
          placeholder="ejemplo@algo.com"
          value={mail}
          onChange={onChangeMail}
        />
        <h3>Nombre:</h3>
        <input
          type="text"
          placeholder="Pepe Argento"
          value={name}
          onChange={onChangeName}
        />
        <button class={styles.buttonForm} type="submit">
          Enviar
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Form;
