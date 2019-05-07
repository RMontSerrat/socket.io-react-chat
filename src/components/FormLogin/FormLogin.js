import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import ErrorMessage from '../ErrorMessage';

const Form = styled.form`
  width: 250px;
  margin: 0 auto;
`
const StyledInput = styled(Input)`
  margin: 10px 0;
`
const Title = styled.h1`
  font-size: 20px;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.colorWhite};
  margin: 0;
  padding: 20px 0;
  text-align: center;
`

const FormLogin = ({ onSubmit, errorMessage }) => {
  const [inputValue, changeValue] = useState('');

  const handleChange = e => {
    const { target: { value } } = e;
    changeValue(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit && inputValue) {
      onSubmit(inputValue);
    }
    changeValue('');
  }

  return (
    <Form onSubmit={handleSubmit} data-testid="formLoginSubmit">
      <Title>Logue-se no Chat</Title>
      <StyledInput
        placeholder="Digite seu nickname"
        onChange={handleChange} 
        value={inputValue}
        data-testid="formLoginInput"
        required
      />
      <Button type="submit">Enviar</Button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Form>
  )
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func,
  errorMessage: PropTypes.string,
}

export default FormLogin;