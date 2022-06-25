import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import {
    BackToSignIn,
    BackToSignInTitle,
    Container,
    Content,
    Icon,
    Logo,
    Title,
} from './styles';
import logo from '../../assets/logo.png';

interface ScreenNavigationProp {
    goBack: () => void;
}

export const SignUp: React.FunctionComponent = () => {
    const navigation = useNavigation<ScreenNavigationProp>();

    return (
        // Fecha o teclado se o usuário tocar fora do teclado
        <KeyboardAvoidingView
            enabled
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
                <Container>
                    <Content>
                        <Logo source={logo} />
                        <Title>Crie a sua conta</Title>
                        <Input placeholder="Nome completo" />
                        <Input placeholder="Email" />
                        <Input placeholder="Senha" />

                        <Button title="Criar conta" />
                    </Content>
                </Container>
            </ScrollView>
            <BackToSignIn
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Icon name="arrow-left" />
                <BackToSignInTitle>Voltar para login</BackToSignInTitle>
            </BackToSignIn>
        </KeyboardAvoidingView>
    );
};
