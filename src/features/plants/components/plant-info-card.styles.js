import styled from "styled-components/native";
import { Card } from "react-native-paper";


export const PlantCard = styled(Card)`
  color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const PlantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[0]};
  color: ${(props) => props.theme.colors.bg.primary};
`;

export const Descript = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const SunLeveling = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
