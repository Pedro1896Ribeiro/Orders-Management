import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #00adef;
`;
export const Scroller = styled.ScrollView`
  flex: 1;
  padding-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const HeaderArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const MenuButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;
export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;
export const InfoMessage = styled.Text`
  font-size: 32px;
  text-align: center;
  color: darkblue;
  margin-top: 50px;
`;
