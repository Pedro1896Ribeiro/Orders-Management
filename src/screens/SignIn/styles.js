import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  background-color: #00adef;
  flex: 1;
  justify-content: center;
  align_items: center;
`;
export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;
export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #c40d45;
  border-radius: 30px;
  justify-content: center;
  align_items: center;
  margin-top: 30px;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #414143;
`;
export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #414143;
  font-weight: bold;
  margin-left: 5px;
`;
export const LoadingIcon = styled.ActivityIndicator``;
