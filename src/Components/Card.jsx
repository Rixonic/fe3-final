import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./utils/global.context";
import styles from "../styles/card.module.css";

const Card = ({ name, username, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const addFav = () => {
    const existingCards = localStorage.getItem("favoriteCards");
    const favoriteCards = existingCards ? JSON.parse(existingCards) : [];

    if (!isFavorite) {
      favoriteCards.push({ id, name, username });
      localStorage.setItem("favoriteCards", JSON.stringify(favoriteCards));
    } else {
      const removeCards = favoriteCards.filter((card) => card.id !== id);
      localStorage.setItem("favoriteCards", JSON.stringify(removeCards));
    }
    setIsFavorite(!isFavorite);
  };

  const isFav = () => {
    const existingCards = localStorage.getItem("favoriteCards");
    const favoriteCards = existingCards ? JSON.parse(existingCards) : [];

    const isCard = favoriteCards.findIndex((card) => card.id === id);
    setIsFavorite(isCard !== -1);
  };

  useEffect(() => {
    isFav();
  }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      class={styles.card}
      style={{
        background: theme.cardBackground,
        boxShadow: theme.shadowOff,
        borderColor: theme.borderColor,
      }}
    >
      <div class={styles.cardContainer}>
        <img src="/images/doctor.jpg" alt="DH-logo" />
        <Link to={`/detail/${id}`}>
          <h2 style={{ color: theme.color }}>{name}</h2>
        </Link>
        <div class={styles.cardContent}>
          <div style={{ color: theme.colorGray }}>
            <p>{username}</p>
            <p>ID: {id}</p>
          </div>
          <div class={styles.cardActions}>
            <button
              onClick={addFav}
              style={{ color: isFavorite ? "#f31260" : "#757575" }}
            >
              ❤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;