import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../Components/utils/global.context";
import styles from "../styles/detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (id) {
      async function getDoctor() {
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await resp.json();
        setDoctor(data);
      }
      getDoctor();
    }
  }, []);

  return (
    <main
      class={styles.detail}
      style={{
        background: theme.mainBackground,
        color: theme.color,
        borderColor: theme.borderColor,
      }}
    >
      <h1>
        Detalles del dentista <span>{doctor?.name}</span>{" "}
      </h1>
      <div
        class={styles.detailCard}
        style={{
          background: theme.cardBackground,
          boxShadow: theme.shadowOff,
          borderColor: theme.borderColor,
        }}
      >
        <div class={styles.detailContainer}>
          <img src="/images/doctor.jpg" alt="DH-logo" />
          <div class={styles.detailContent}>
            <h1>{doctor?.name}</h1>
            <div>
              <p>
                Usuario: <span>{doctor?.username}</span>
              </p>
              <p>
                Mail: <span>{doctor?.email}</span>
              </p>
              <p>
                Numero de contacto: <span>{doctor?.phone}</span>
              </p>
              <p>
                Sitio web: <span>{doctor?.website}</span>
              </p>
            </div>
            <div>
              <p>Direccion:</p>
              <ul>
                <li>
                  Calle: <span>{doctor?.address.street}</span>
                </li>
                <li>
                  Apartamento: <span>{doctor?.address.suite}</span>
                </li>
                <li>
                  Ciudad: <span>{doctor?.address.city}</span>
                </li>
                <li>
                  Codigo postal: <span>{doctor?.address.zipcode}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
