import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Components/utils/global.context";
import styles from "../styles/home.module.css";

const Home = () => {
  const [medics, setMedic] = useState();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    async function getMedic() {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();
      setMedic(data);
    }
    getMedic();
  }, []);
  return (
    <main
      style={{
        background: theme.mainBackground,
        color: theme.color,
        borderColor: theme.borderColor,
      }}
    >
      <h1>Home</h1>
      <div class={styles.cardGrid}>
        {medics?.map((medic) => (
          <Card
            key={medic.id}
            name={medic.name}
            username={medic.username}
            id={medic.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
