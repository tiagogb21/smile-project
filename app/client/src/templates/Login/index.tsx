import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';

import Button from '../../components/Button';
import GoogleButton from '../../components/GoogleButton';

import { Container, Form } from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { addEmailToLogin, addPasswordToLogin } from '../../redux/reducers/loginReducer';
import { validateEmail, validatePassword } from '../../service/function';

const Login: React.FC = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [controlInput, setControlInput] = useState(true);
  const [showPassword, setShowPassword] = useState('password');

  const { email, password } = useAppSelector(state => state.login);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  }

  const handleChangeMessage = () => {
    setShowPassword(controlInput ? 'text' : 'password');
    setControlInput(!controlInput);
  }

  useEffect(() => {
    const isButtonDisabled = validateEmail(email) && validatePassword(password);
    setButtonDisabled(!isButtonDisabled);
  }, [email, password]);

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.CLIENT_ID,
        scope: "",
      });
    };

    gapi.load('client:auth2', start);
  }, []);

  return (
    <Container>
      <Form action="">
        <h1>LOGIN</h1>
        {/* Email */}
        <label htmlFor="input-email" className="label-info-login">
          Email
          <input
            id="input-email"
            type="email"
            value={ email }
            onChange={(e) => {
              dispatch(addEmailToLogin(e.target.value))
            } }
            placeholder="Digite seu email"
            required
          />
        </label>
        {/* Password */}
        <label htmlFor="input-password" className="label-info-login">
          Password
          <input
            id="input-password"
            type={showPassword}
            value={ password }
            onChange={(e) => {
              dispatch(addPasswordToLogin(e.target.value))
            } }
            placeholder="********"
            required
          />
        </label>

        <label htmlFor="" className="label-show-input">
          <input
            type="checkbox"
            onChange={ handleChangeMessage }
          />
          Mostrar password
        </label>

        <GoogleButton />

        {/* Enter */}
        <Button
          label="Entrar"
          onClick={ handleClick }
          disabled={ buttonDisabled }
        />
        {/* Register */}

        <a href="/register" className="navigate-register">
          <span>Criar conta</span>
        </a>

      </Form>
    </Container>
  );
}

export default Login;
