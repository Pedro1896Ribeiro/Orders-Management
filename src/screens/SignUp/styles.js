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
export const CompanyButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: #4dc6f3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;
export const LeftIcon = styled.View`
  align-items: center;
  left: 15px;
  position: absolute;
`;
export const CompanyButtonText = styled.Text`
  flex: 1;
  font-size: 16px;
  color: #fff;
  margin-left: 30px;
`;
export const ModalViewScroll = styled.ScrollView`
  width: 100%;
`;
export const ModalView = styled.View`
  flex: 1;
  margin: 20px;
  background-color: #4dc6f3;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  elevation: 5;
`;
export const ModalRender = styled.TouchableOpacity`
  background-color: #00adef;
  margin-bottom: 20px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
`;
export const ModalRenderTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #fff;
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
  margin-bottom: 50px;
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
