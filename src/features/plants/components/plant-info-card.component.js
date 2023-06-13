import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const PlantCard = styled(Card)`
  color: ${(props) => props.theme.colors.bg.primary};
`;

const PlantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Descript = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const PlantInfoCard = ({ plant = {} }) => {
  const {
    name = "Haworthia",
    description = "Haworthia is a stunning little succulent native to South Africa",
    photos = [
      "https://cafegoldoon.com/wp-content/uploads/2020/07/30b709d73637558530aa1939f80552b6-min-e1594570500238.jpg",
    ],
    difficultyLevel = 1,
    sunlightLevel = 2,
  } = plant;

  return (
    <PlantCard elevation={5}>
      <PlantCardCover
        key={name}
        style={styles.cover}
        source={{ uri: photos[0] }}
      />
      <Info>
        <Title>{name}</Title>
        <Descript>{description}</Descript>
      </Info>
    </PlantCard>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
