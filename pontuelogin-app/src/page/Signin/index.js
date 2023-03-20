import React, { useState } from 'react';
import axios from 'axios';
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../../assets/logo-full.png";
import getUser from "../../components/UserRedação"

const Signin = () => {
  const goToAdmin = () => {
    navigate('/admin');
  };

  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email ) {
      setError("Preencha o campo!");
      return;
    }

    const res = signin(email );

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Label>
        <img src={Logo}/>
      </C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail 👋"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={getUser} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
      <Button Text="Administrador" onClick={goToAdmin} />
    </C.Container>
  );
};

export default Signin;