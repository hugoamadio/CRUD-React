import styled from "styled-components";

const BtnStyled = styled.button`
  background-color: black;
  color: ${({theme}) =>  theme.colors.secondary};
  font-size: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 8px;
  border: none;
  border-radius: 12px;
  border: 1px solid black;
  transition: 0.2s ease-in;
  cursor: pointer;
  
  &:hover{
    transform: translateY(-2px) translateX(1px);
    background-color: ${({theme}) =>  theme.colors.primary};
    border: 1px solid black;
    color: black;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`

interface ButtonDefaultProps {
  label: string;
  type: 'button' |  'submit' | 'reset';
}

function ButtonDefaultStyled({ type, label }: ButtonDefaultProps) {
  return <BtnStyled type={type}>{label}</BtnStyled>;
}

export default ButtonDefaultStyled;
