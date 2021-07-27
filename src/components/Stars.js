import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

const StarArea = styled.View`
  flex-direction: row;
`;
const StarView = styled.View``;
const StarText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
  color: #737373;
`;

export default ({ stars, showNumber }) => {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(stars);
  let left = stars - floor;

  for (var i = 0; i < floor; i++) {
    s[i] = 2;
  }
  if (left > 0) {
    s[i] = 1;
  }

  return (
    <StarArea>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && (
            <Icon name="ios-star-outline" size={18} color="#FF9200" />
          )}
          {i === 1 && (
            <Icon name="ios-star-half-sharp" size={18} color="#FF9200" />
          )}
          {i === 2 && <Icon name="ios-star-sharp" size={18} color="#FF9200" />}
        </StarView>
      ))}
      {showNumber && <StarText>{stars}</StarText>}
    </StarArea>
  );
};
