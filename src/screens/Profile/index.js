import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  AvatarContainer,
  Avatar,
  UserText,
  InfoScroll,
  CustomButton,
  CustomButtonText,
  Line,
} from './styles';
import TextInput from '../../components/TextInput';
import { UserContext } from '../../contexts/UserContext';
import { auth } from '../../services/firebase';

export default ({ navigation }) => {
  const [user, setUser] = useContext(UserContext);

  const signOutUser = () => {
    auth.signOut().then(() => {
      setUser((state) => ({ ...state, isLoggedIn: false }));
      navigation.reset({
        routes: [{ name: 'SignIn' }],
      });
    });
  };

  return (
    <Container>
      <AvatarContainer>
        <Avatar source={{ uri: user.avatar }} />
        <Icon
          name="ios-camera"
          size={35}
          color="#000"
          style={{ position: 'absolute', alignSelf: 'flex-end' }}
        />
      </AvatarContainer>

      <UserText>{user.username}</UserText>

      <InfoScroll>
        <TextInput placeholder={user.username} icon="ios-person" />
        <TextInput placeholder={user.phone} icon="ios-phone-portrait-outline" />
        <TextInput placeholder={user.email} icon="ios-mail" />
        <TextInput placeholder="Empresa" icon="ios-business" />
        <Line />
        <TextInput placeholder="Contacto Gestor" icon="ios-person" />
        <TextInput placeholder="Recolha Mercadoria" icon="ios-business" />
        <TextInput placeholder="Faturação" icon="ios-document" />
        <Line />
        <CustomButton style={{ width: '100%' }}>
          <CustomButtonText>Atualizar</CustomButtonText>
        </CustomButton>
      </InfoScroll>

      <CustomButton onPress={signOutUser}>
        <CustomButtonText>SAIR</CustomButtonText>
      </CustomButton>
    </Container>
  );
};
