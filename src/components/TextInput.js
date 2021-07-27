import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #4dc6f3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;
const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #fff;
  margin-left: 30px;
`;
const LeftIcon = styled.View`
  align-items: center;
  left: 15px;
  position: absolute;
`;
const RightIcon = styled.TouchableOpacity`
  align-items: center;
  right: 15px;
  position: absolute;
`;

export default ({
  placeholder,
  icon,
  value,
  onChangeText,
  isPassword,
  hidePassword,
  setHidePassword,
  autoCapitalize,
  autoCompleteType,
  autoCorrect,
  autoFocus,
  keyboardType,
}) => {
  return (
    <InputArea>
      <LeftIcon>
        <Icon name={icon} size={20} color="#FFF" />
      </LeftIcon>
      <Input
        placeholder={placeholder}
        placeholderTextColor="#FFF"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={hidePassword}
        autoCapitalize={autoCapitalize}
        autoCompleteType={autoCompleteType}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
      />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Icon
            name={hidePassword ? 'ios-eye-off' : 'ios-eye'}
            size={20}
            color="#FFF"
          />
        </RightIcon>
      )}
    </InputArea>
  );
};
