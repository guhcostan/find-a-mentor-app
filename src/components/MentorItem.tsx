import {
  Linking,
  Text,
  TouchableOpacity,
  Clipboard,
  Alert,
  View,
} from 'react-native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
import { Subtitle, Title } from '../global-components';

const Container = styled.View`
  background-color: ${props => props.theme.colors.dark2};
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 16px;
  border-radius: 6px;
`;

const IconContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  width: 100px;
  justify-content: space-between;
`;

const TextContainer = styled.View`
  align-items: center;
`;

export const TitleMentor = styled(Title)`
  font-size: 24px;
  margin-bottom: 0px;
`;

export const SubtitleMentor = styled(Subtitle)`
  font-size: 14px;
`;

const MentorItem: React.FC = ({ mentor }) => {
  const theme = useTheme();
  return (
    <Container>
      <TextContainer>
        <TitleMentor>{mentor?.name}</TitleMentor>
        <SubtitleMentor>
          {mentor?.profession} - {mentor?.years}
        </SubtitleMentor>
      </TextContainer>
      <IconContainer>
        <TouchableOpacity
          onPress={() => Linking.openURL(`https://wa.me/${mentor?.whatsapp}`)}
        >
          <Ionicons
            name="md-logo-whatsapp"
            size={24}
            color={theme.colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              mentor?.linkedin.includes('linkedin')
                ? mentor?.linkedin
                : `https://www.linkedin.com/in/${mentor?.linkedin}`,
            )
          }
        >
          <Ionicons
            name="md-logo-linkedin"
            size={24}
            color={theme.colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(`mailto:${mentor.email}`).catch(e => {
              Alert.alert(
                'Problema com email?',
                'Deseja copiar o email para entrar em contato posteriormente?',
                [
                  {
                    text: 'Fechar',
                    onPress: () => null,
                  },
                  {
                    text: 'Copiar',
                    onPress: () => {
                      Clipboard.setString(mentor.email);
                      Alert.alert('Email copiado com sucesso');
                    },
                  },
                ],
              );
            })
          }
        >
          <Ionicons name="md-mail" size={24} color={theme.colors.white} />
        </TouchableOpacity>
      </IconContainer>
    </Container>
  );
};
export default MentorItem;
