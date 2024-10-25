import React from "react";
import MainWrap from "../components/MainWrap";
import LoginForm from "../components/LoginForm";

const Home: React.FC = () => {
  return (
    <MainWrap>
      Home - Page - Login/Reg
      <LoginForm />
    </MainWrap>
  );
};

export default Home;
