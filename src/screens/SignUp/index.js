import React, { useState, useEffect } from 'react';
import { Image, Modal } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  InputArea,
  CompanyButton,
  LeftIcon,
  CompanyButtonText,
  ModalViewScroll,
  ModalView,
  ModalRender,
  ModalRenderTitle,
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
  const [userField, setUserField] = useState('');
  const [phoneField, setPhoneField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  var [list, setList] = useState([]);

  const handleSignUpClick = async () => {
    setLoading(true);
    if (
      userField != '' &&
      phoneField != '' &&
      emailField != '' &&
      passwordField != ''
    ) {
      await auth
        .createUserWithEmailAndPassword(emailField, passwordField)
        .then((authUser) => {
          const uid = authUser.user.uid;
          const avatar =
            'https://www.trackergps.com/canvas/images/icons/avatar.jpg';
          const data = {
            id: uid,
            userField,
            phoneField,
            emailField,
            avatar,
          };
          db.collection('users')
            .doc(uid)
            .set(data)
            .then(() => {
              navigation.reset({
                routes: [{ name: 'CodeVerification' }],
              });
            });
        })
        .catch((error) => alert(error.message), setLoading(false));
    } else {
      alert('Preencha os campos!');
      setLoading(false);
    }
  };

  const handleMessageButtonClick = () => {
    navigation.navigate('SignIn');
  };

  const getCompanies = () => {
    setList([]);
    db.collection('companies').onSnapshot((querySnapshot) => {
      const list = [];

      querySnapshot.forEach((documentSnapshot) => {
        list.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setList(list);
    });
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <Container>
      <KeyboardAwareScrollView style={{ width: '100%', top: 30 }}>
        <Image
          style={{ width: '100%', height: 200 }}
          source={require('../../assets/images/Marketplaces.jpg')}
        />

        <InputArea>
          <TextInput
            placeholder="Nome"
            icon="ios-person"
            value={userField}
            onChangeText={(t) => setUserField(t)}
            autoCorrect={false}
            autoFocus={true}
          />
          <TextInput
            placeholder="Telemóvel"
            icon="ios-phone-portrait-outline"
            value={phoneField}
            onChangeText={(t) => setPhoneField(t)}
            keyboardType="phone-pad"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
          />
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
          <CompanyButton onPress={() => setModalVisible(true)}>
            <LeftIcon>
              <Icon name="ios-business" size={20} color="#FFF" />
            </LeftIcon>
            <CompanyButtonText>Identificação Empresa</CompanyButtonText>
          </CompanyButton>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <ModalView>
              <ModalViewScroll>
                {list.map((item, key) => (
                  <ModalRender
                    key={key}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <ModalRenderTitle>{item.nome}</ModalRenderTitle>
                  </ModalRender>
                ))}
              </ModalViewScroll>
            </ModalView>
          </Modal>

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

          <CustomButton onPress={handleSignUpClick} disabled={loading}>
            {loading ? (
              <LoadingIcon size="small" color="#FFFFFF" />
            ) : (
              <CustomButtonText>REGISTAR</CustomButtonText>
            )}
          </CustomButton>
        </InputArea>

        <SignMessageButton onPress={handleMessageButtonClick}>
          <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
          <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
        </SignMessageButton>
      </KeyboardAwareScrollView>
    </Container>
  );
};
