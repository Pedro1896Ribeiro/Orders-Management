import React, { useState } from 'react';
import { Image } from 'react-native';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  LoadingIcon,
} from './styles';
import TextInput from '../../components/TextInput';
import { auth, db } from '../../services/firebase';

export default ({ navigation }) => {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSignInClick = async () => {
    setLoading(true);
    if (emailField != '' && passwordField != '') {
      await auth
        .signInWithEmailAndPassword(emailField, passwordField)
        .then(() => {
          navigation.reset({
            routes: [{ name: 'BottomTabNavigation' }],
          });
        })
        .catch((error) => alert(error), setLoading(false));
    } else {
      alert('Preencha os campos!');
      setLoading(false);
    }
  };

  const handleMessageButtonClick = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <Image
        style={{ width: '100%', height: 200 }}
        source={require('../../assets/images/Marketplaces.jpg')}
      />

      <InputArea>
        <TextInput
          placeholder="Email"
          icon="ios-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          autoFocus={true}
        />
        <TextInput
          placeholder="Password"
          icon="ios-lock-closed"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          isPassword={true}
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          autoFocus={true}
        />

        <CustomButton onPress={handleSignInClick} disabled={loading}>
          {loading ? (
            <LoadingIcon size="small" color="#FFFFFF" />
          ) : (
            <CustomButtonText>LOGIN</CustomButtonText>
          )}
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Registe-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
