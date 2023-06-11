import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const PlantCard = styled(Card)`
  background-color: white;
`;

const PlantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const PlantInfoCard = ({ plant = {} }) => {
  const {
    name = "Haworthia",
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
      <Title>{name}</Title>
    </PlantCard>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
