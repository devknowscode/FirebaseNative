import React from 'react';
import Styled from 'styled-components/native';
import theme from '../styles/theme';
import {s} from '../utils/scale';

interface ITextInput {
  value: string;
  placeholder?: string;
  onChange?: (text: string) => void;
  isSecure?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  textAlign?: 'left' | 'center' | 'right';
}

const Input = Styled.TextInput`
    width: 80%;
    height: ${s(40)}px;
    paddingLeft: ${s(10)}px;
    font-size: ${s(14)}px;
    margin-bottom: ${s(4)}px;
    background-color: ${theme.colors.white};
    text-align: ${props => props.textAlign};
    color: ${theme.font.colors.primary};
    border-color: ${theme.colors.primary};
    border-radius: 10px;
    border-width: 2px;
`;

const Render = ({
  value = '',
  placeholder = '',
  onChange = () => {},
  isSecure = false,
  autoCapitalize = 'none',
  textAlign = 'left',
}: ITextInput) => {
  return (
    <Input
      textAlign={textAlign}
      secureTextEntry={isSecure}
      autoCapitalize={autoCapitalize}
      placeholder={placeholder}
      onChangeText={text => onChange(text)}
      value={value}
    />
  );
};

export default Render;
