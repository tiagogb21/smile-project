import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import { Container, Form } from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { validateEmail, validatePassword } from '../../utils/validation';
import {
  addEmailToRegister,
  addNameToRegister,
  addPasswordToRegister,
} from '../../redux/reducers/registerReducer';
import axios from 'axios';

const Register: React.FC = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [controlInput, setControlInput] = useState(true);
  const [showPassword, setShowPassword] = useState('password');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { name, email, password } = useAppSelector((state) => state.register);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const isButtonDisabled =
      validateEmail(email) &&
      validatePassword(password) &&
      password === confirmPassword;
    setButtonDisabled(!isButtonDisabled);
  }, [email, password, confirmPassword]);

  const handleClick = async () => {
    const createNewUser = await axios
      .post('http://localhost:3001/register', {
        name,
        email,
        password,
        role: 'client',
      })
      .then((result) => result)
      .catch((error) => error);
    if (createNewUser?.message?.includes('failed')) {
      return;
    }
    navigate('/client');
  };

  const handleChangeMessage = () => {
    setShowPassword(controlInput ? 'text' : 'password');
    setControlInput(!controlInput);
  };

  return (
    <Container>
      <Form action="">
        <h1>CADASTRO</h1>

        <label htmlFor="input-name-register" className="label-info-login">
          Nome
          <input
            id="input-name-register"
            type="email"
            value={name}
            onChange={(e) => {
              dispatch(addNameToRegister(e.target.value));
            }}
            placeholder="Digite seu nome"
            required
          />
        </label>

        <label htmlFor="input-email-register" className="label-info-login">
          Email
          <input
            id="input-email-register"
            type="email"
            value={email}
            onChange={(e) => {
              dispatch(addEmailToRegister(e.target.value));
            }}
            placeholder="Digite seu email"
            required
          />
        </label>

        <label htmlFor="input-password-register" className="label-info-login">
          Password
          <input
            id="input-password-register"
            type={showPassword}
            value={password}
            onChange={(e) => {
              dispatch(addPasswordToRegister(e.target.value));
            }}
            placeholder="********"
            required
          />
        </label>

        <label
          htmlFor="input-check-password-register"
          className="label-info-login"
        >
          Confirmar Password
          <input
            id="input-password"
            type={showPassword}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="********"
            required
          />
        </label>

        <label htmlFor="" className="label-show-input">
          <input type="checkbox" onChange={handleChangeMessage} />
          Mostrar password
        </label>

        <Button
          label="Entrar"
          onClick={() => {
            handleClick();
          }}
          disabled={buttonDisabled}
        />

        <a href="/" className="navigate-register">
          <span>Fazer login</span>
        </a>
      </Form>
    </Container>
  );
};

export default Register;
