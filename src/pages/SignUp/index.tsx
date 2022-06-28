import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Form/Button';
import { InputControl } from '../../components/Form/InputControl';
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

// INterface genérica
// Recebe qualquer coisa, desde que seja uma string
interface IFormInputs {
    [name: string]: any;
}

export const SignUp: React.FunctionComponent = () => {
    const { handleSubmit, control } = useForm<FieldValues>();
    const navigation = useNavigation<ScreenNavigationProp>();

    const handleSignUp = (form: IFormInputs) => {
        const Data = {
            name: form.name,
            email: form.email,
            password: form.password,
        };
        console.log(Data);
    };

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
                        <InputControl
                            autoCapitalize="words"
                            autoCorrect={false}
                            control={control}
                            name="name"
                            placeholder="Nome completo"
                        />

                        <InputControl
                            autoCapitalize="none"
                            autoCorrect={false}
                            control={control}
                            name="email"
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                        <InputControl
                            control={control}
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="password"
                            placeholder="Senha"
                            secureTextEntry
                        />

                        <Button
                            title="Criar conta"
                            onPress={handleSubmit(handleSignUp)}
                        />
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
