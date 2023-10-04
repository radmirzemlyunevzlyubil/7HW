import React, { useContext } from "react";
import Form from "../components/Form";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const register = async (email, password) => {
    const registrationSuccess = await signUp(email, password);
    return registrationSuccess;
  };

  return (
    <div>
      <Form register={register} />
    </div>
  );
};

export default SignUp;
