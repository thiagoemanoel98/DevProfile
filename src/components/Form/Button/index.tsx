import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

// Propriedades default + a que defino aqui
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
    title,
    ...otherProps
}) => {
    return (
        <Container {...otherProps}>
            <Title>{title}</Title>
        </Container>
    );
};
