import React from 'react';

import { ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Form/Button';

import {
    Container,
    Content,
    CreateAccount,
    CreateAccountTitle,
    ForgotPasswordButton,
    ForgotPasswordTitle,
    Icon,
    Logo,
    Title,
} from './styles';
import logo from '../../assets/logo.png';
import { InputControl } from '../../components/Form/InputControl';
import { AuthContext } from '../../context/AuthContext';

interface ScreenNavigationProp {
    navigate: (screen: string) => void;
}

const formSchema = yup.object({
    email: yup.string().email('Email inválido').required('Informe o email.'),
    password: yup.string().required('Digite a senha.'),
});

// INterface genérica
// Recebe qualquer coisa, desde que seja uma string
interface IFormInputs {
    [name: string]: any;
}

export const SignIn: React.FunctionComponent = () => {
    const auth = React.useContext(AuthContext);

    console.log(auth);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FieldValues>({
        resolver: yupResolver(formSchema),
    });

    const navigation = useNavigation<ScreenNavigationProp>();

    const handleSignIn = (form: IFormInputs) => {
        const Data = {
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
                        <View>
                            <Title>Faça o Login</Title>
                        </View>
                        <InputControl
                            autoCapitalize="none"
                            autoCorrect={false}
                            control={control}
                            name="email"
                            placeholder="Email"
                            keyboardType="email-address"
                            error={errors.email && errors.email.message}
                        />
                        <InputControl
                            control={control}
                            autoCapitalize="none"
                            autoCorrect={false}
                            name="password"
                            placeholder="Senha"
                            secureTextEntry
                            error={errors.password && errors.password.message}
                        />

                        <Button
                            title="Entrar"
                            onPress={handleSubmit(handleSignIn)}
                        />

                        <ForgotPasswordButton>
                            <ForgotPasswordTitle>
                                Esqueci minha senha
                            </ForgotPasswordTitle>
                        </ForgotPasswordButton>
                    </Content>
                </Container>
            </ScrollView>
            <CreateAccount
                onPress={() => {
                    navigation.navigate('SignUp');
                }}
            >
                <Icon name="log-in" />
                <CreateAccountTitle>Criar uma conta</CreateAccountTitle>
            </CreateAccount>
        </KeyboardAvoidingView>
    );
};
