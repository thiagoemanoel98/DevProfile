import React from 'react';
import {
    Container,
    Header,
    Icon,
    UserAvatar,
    UserAvatarButton,
    UserGreenting,
    UserInfo,
    UserInfoDetail,
    UserName,
    UserWrapper,
} from './styles';

// Tem que definir tipagem, para ser reconhecido como módulo
import avatarDefault from '../../assets/avatar02.png';

export const Home: React.FC = () => {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <UserAvatarButton onPress={() => {}}>
                            <UserAvatar source={avatarDefault} />
                        </UserAvatarButton>
                        <UserInfoDetail>
                            <UserGreenting>Olá,</UserGreenting>
                            <UserName>Thiago</UserName>
                        </UserInfoDetail>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
        </Container>
    );
};
