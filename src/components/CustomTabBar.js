import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

const TabArea = styled.View`
  height: 60px;
  background-color: #4dc6f3;
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #4dc6f3;
  margin-top: -10px;
`;

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <Icon
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
          name="ios-home"
          size={24}
          color="#FFF"
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Chat')}>
        <Icon name="ios-chatbubble-ellipses" size={32} color="#4dc6f3" />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Profile')}>
        <Icon
          style={{ opacity: state.index === 2 ? 1 : 0.5 }}
          name="ios-person"
          size={24}
          color="#FFF"
        />
      </TabItem>
    </TabArea>
  );
};
