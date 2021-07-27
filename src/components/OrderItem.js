import React from 'react';
import styled from 'styled-components';

import Stars from './Stars';

const Area = styled.TouchableOpacity`
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;
const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;
const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;
const OrderTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export default ({ data }) => {
  return (
    <Area>
      <Avatar source={{ uri: data.avatar }} />
      <InfoArea>
        <OrderTitle>Chegada: 10/06/2021</OrderTitle>
        <OrderTitle>Remetida: 12/06/2021</OrderTitle>
        <OrderTitle>Estado: Encomenda Pronta</OrderTitle>
        <Stars stars={data.stars} showNumber={true} />
      </InfoArea>
    </Area>
  );
};
