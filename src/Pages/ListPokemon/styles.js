import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background:#acf;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 28px;
  font-weight: bold;
  align-self: center;
  margin-top: 25px;
`;
export const Name = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: bold;
  align-self: center;
  margin-top: 25px;
`;

export const DescriptionPokemon = styled.TouchableOpacity`
background: #fff;

margin: 5px 15px;
border: 2px;
border-radius: 5px;
padding: 10px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
export const Like= styled.TouchableOpacity`

width: 10px;
height:10px;
background: #823;

`;
