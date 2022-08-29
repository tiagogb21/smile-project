import React from 'react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    buttonHtml: `
        Teste
      `
  },
};

export const Template = (args) => {
  return (
    <Button {...args} />
  );
};
