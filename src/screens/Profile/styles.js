import React from 'react';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00adef;
`;
export const AvatarContainer = styled.View`
  margin-top: 70px;
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  shadow-color: #222222;
`;
export const Avatar = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;
export const UserText = styled.Text`
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 32px;
  font-size: 20px;
`;
export const InfoScroll = styled.ScrollView`
  width: 80%;
`;
export const CustomButton = styled.TouchableOpacity`
  width:80%
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
export const Line = styled.View`
  width: 100%;
  height: 1px;
  background.color: #000;
  margin-bottom: 15px;
`;
