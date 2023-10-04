import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Добро пожаловать на наш сайт!</h1>
      <p className="home-description">Сквозь коды и протоколы!</p>
      <Link to="/signup">
        <button className="signUp">Войти</button>
      </Link>
      <Link to="/cabinet">
        <button className="cabinet">В кабинет</button>
      </Link>
    </div>
  );
};

export default Home;
