import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

const Form = styled.form`
  display: flex;
`

const ButtonContainer = styled.div`
  width: 250px;
  padding-left: 10px;
`

const MessageBar = ({ onSubmit }) => {
  const [inputValue, changeValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(inputValue);
    }
    changeValue('');
  }

  const handleChange = e => {
    const { target: { value }} = e;
    changeValue(value);
  }

  return (
    <Form onSubmit={handleSubmit} data-testid="messageBarSubmit">
      <Input
        placeholder="Digite sua mensagem aqui..."
        value={inputValue}
        onChange={handleChange}
        data-testid="messageBarInput"
      />
      <ButtonContainer>
        <Button type="submit">Enviar</Button>
      </ButtonContainer>
    </Form>
  )
}

export default MessageBar;