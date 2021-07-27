import React, { useEffect, useContext } from 'react';
import { Image } from 'react-native';

import { Container, LoadingIcon } from './styles';
import { UserContext } from '../../contexts/UserContext';
import { auth, db } from '../../services/firebase';

export default ({ navigation }) => {
  const [_, setUser] = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        db.collection('users')
          .doc(authUser.uid)
          .get()
          .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
              const data = documentSnapshot.data();
              setUser({
                isLoggedIn: true,
                username: data.userField,
                phone: data.phoneField,
                email: data.emailField,
                company: data.companyField,
                uid: data.uid,
                avatar: data.avatar,
              });
              navigation.reset({
                routes: [{ name: 'BottomTabNavigation' }],
              });
            }
          });
      } else {
        setUser((state) => ({ ...state, isLoggedIn: false }));
        navigation.reset({
          routes: [{ name: 'SignIn' }],
        });
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Container>
      <Image
        style={{ width: '100%', height: 300 }}
        source={require('../../assets/images/Marketplaces.jpg')}
      />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
