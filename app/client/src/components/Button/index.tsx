import React from 'react';
import { ButtonProps } from '../../interface/@types.button';

import {Container} from './styles'

const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick, disabled } = props;

  return (
    <Container
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="button-blue"
    >
      {label}
    </Container>
  );
}

export default Button;
