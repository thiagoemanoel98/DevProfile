import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { Container, Content, Title } from './styles';

export const SignIn: React.FunctionComponent = () => {
    return (
        // Fecha o teclado se o usuário tocar fora do teclado
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flex: 1 }}
        >
            <Container>
                <Content>
                    <Title>Faça o Login</Title>
                    <Input placeholder="Email" />
                    <Input placeholder="Senha" />

                    <Button title="Entrar" />
                </Content>
            </Container>
        </ScrollView>
    );
};
