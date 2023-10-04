import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import "../styles/Cabinet.css";

const Cabinet = () => {
  const { user, logout } = useContext(AuthContext);
  const history = useNavigate();

  const handleLogout = async () => {
    await logout();
    history("/signup");
  };

  return (
    <div className="cabinet-container">
      {user ? (
        <div>
          <h1>Добро пожаловать в кабинет!</h1>
          <p>Вы вошли в систему как: {user.email}</p>
          <button onClick={handleLogout}>Выйти</button>
          <Link to="/">
            <p className="toHome">Перейти на главную</p>
          </Link>
        </div>
      ) : (
        <p>Вы не авторизованы. Пожалуйста, войдите в систему.</p>
      )}
    </div>
  );
};

export default Cabinet;
