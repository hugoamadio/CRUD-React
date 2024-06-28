import React, { ChangeEvent } from 'react';
import InputStyled from './InputTypeStyled';

interface InputProps {
  value: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputType: React.FC<InputProps> = ({ value, type, placeholder, onChange }) => {
  return (
    <InputStyled
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputType;
