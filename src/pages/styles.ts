import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const TextField = styled.input`
  height: 40px;
  border-radius: 10px;
  border: 1px solid gainsboro;
  color: #404040;
  padding: 0 10px;
`;

export const Button = styled.button`
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  border: 0;
  background: deepskyblue;
  color: white;
  font-weight: 700;
  font-size: 18px;

  &:hover {
    background: dodgerblue;
  }

  &:active {
    background: deepskyblue;
  }
`;

export const ErrorMessage = styled.p`
  color: orangered;
  font-size: 14px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
