import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Container = styled.div`
  display: flex;
`

const ButtonContainer = styled.div`
  width: 250px;
  padding-left: 10px;
`

const MessageBar = ({ onSubmit }) => {
  const [inputValue, changeValue] = useState(null);

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(inputValue);
    }
  }

  const handleChange = e => {
    const { target: { value }} = e;
    changeValue(value);
  }

  return (
    <Container>
      <Input
        placeholder="Digite sua mensagem aqui..."
        value={inputValue}
        onChange={handleChange}
      />
      <ButtonContainer>
        <Button onClick={handleSubmit}>Enviar</Button>
      </ButtonContainer>
    </Container>
  )
}

export default MessageBar;