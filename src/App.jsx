import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Cabinet from "./pages/Cabinet";
import "./App.scss";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route
          path="/"
          element={
            <Home
              protectedRoute={(user) => (
                user ? <Home /> : <Navigate to="/signup" />
              )}
            />
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
