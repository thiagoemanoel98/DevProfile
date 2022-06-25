import React from 'react';
import { TextInputProps } from 'react-native';
import theme from '../../../global/styles/theme';
import { Container } from './styles';

// Todas as propriedades do textinput disponiveis
export const Input: React.FunctionComponent<TextInputProps> = ({
    ...otherProps
}) => {
    return (
        <Container
            placeholderTextColor={theme.colors.gray500}
            {...otherProps}
        />
    );
};
