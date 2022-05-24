// .ts: Não vai ser componente
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    /*Propriedade criada por nós, tenho que indicar o tema*/

    background-color: ${({ theme }) => theme.colors.dark};
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.light};
`;
