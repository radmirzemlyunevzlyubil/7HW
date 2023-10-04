import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Form.scss";
import { AuthContext } from "../context/AuthContext";

const Form = ({ register }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const { user, signUp, signIn, logout } = useContext(AuthContext);
  const history = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    let success = false;

    if (isRegistered) {
      success = await signIn(email, pass);
    } else {
      success = await signUp(email, pass);
    }

    if (success) {
      setIsRegistered(true);
      history("/");
    } else {
      setIsRegistered(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    history("/signup");
  };

  return (
    <div className="container">
      {user ? (
        <div>
          <p>Вы вошли в систему как: {user.email}</p>
          <button className="out" onClick={handleLogout}>Выйти</button>
          <Link to="/cabinet">
            <p className="link-text">Перейти в кабинет</p>
          </Link>
        </div>
      ) : (
        <form onSubmit={submit}>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              id="password"
              type="password"
            />
          </div>
          <button className="register" type="submit">
            {isRegistered ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>
      )}

      {isRegistered && !user && (
        <p>Регистрация успешна! Теперь вы можете войти.</p>
      )}
    </div>
  );
};

export default Form;
