import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Components/utils/global.context";
import styles from "../styles/home.module.css";

const getFavsFromStorage = () => {
  const localData = localStorage.getItem("favoriteCards");
  return localData ? JSON.parse(localData) : [];
};

const Favs = () => {
  const [favs, setFavs] = useState();
  useEffect(() => {
    const data = getFavsFromStorage();
    setFavs(data);
  }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <main
      style={{
        background: theme.mainBackground,
        color: theme.color,
        borderColor: theme.borderColor,
      }}
    >
      <h1>Dentists Favs</h1>
      <div class={styles.cardGrid}>
        {favs?.map((fav) => (
          <Card
            key={fav.id}
            name={fav.name}
            username={fav.username}
            id={fav.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Favs;
