import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
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
import { api } from '../../services/api';

interface ScreenNavigationProp {
    goBack: () => void;
}

// INterface genérica
// Recebe qualquer coisa, desde que seja uma string
interface IFormInputs {
    [name: string]: any;
}

const formSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().email('Email inválido').required('Informe o email.'),
    password: yup.string().required('Digite a senha.'),
});

export const SignUp: React.FunctionComponent = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FieldValues>({
        resolver: yupResolver(formSchema),
    });

    const navigation = useNavigation<ScreenNavigationProp>();

    const handleSignUp = async (form: IFormInputs) => {
        const Data = {
            name: form.name,
            email: form.email,
            password: form.password,
        };

        try {
            await api.post('users', Data);
            Alert.alert('Cadastro realizado!', 'Você já pode logar!');
        } catch (error) {
            Alert.alert(
                'Erro no cadastro',
                'Ocorreu um erro ao fazer o cadastro. Tente novamente.',
            );
        }
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
                            error={errors.name && errors.name.message}
                        />

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
