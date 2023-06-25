import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { PlantInfoCard } from "../components/plant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const PlantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="search" style={styles.searchbar} />
    </SearchContainer>
    <FlatList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <PlantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);

const styles = StyleSheet.create({
  searchbar: {
    borderRadius: 5,
  },
});
