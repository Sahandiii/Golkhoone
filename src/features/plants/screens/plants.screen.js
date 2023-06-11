import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { PlantInfoCard } from "../components/plant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  border-radius: 5px;
  padding: 16px;
`;

const PlantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const PlantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="search" style={styles.searchbar} />
    </SearchContainer>
    <PlantListContainer>
      <PlantInfoCard />
    </PlantListContainer>
  </SafeArea>
);

const styles = StyleSheet.create({
  searchbar: {
    borderRadius: 5
  }
});
