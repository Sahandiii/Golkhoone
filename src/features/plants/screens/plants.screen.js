import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, FlatList } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { PlantInfoCard } from "../components/plant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { fonts } from "../../../infrastructure/theme/fonts";



const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const PlantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const PlantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar
        placeholder="جستجو برای گیاه"
        placeholderTextColor="grey"
        inputStyle={styles.inputText}
        style={styles.searchbar}
      />
    </SearchContainer>
    <PlantList
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
    />
  </SafeArea>
);

const styles = StyleSheet.create({
  searchbar: {
    borderRadius: 10,
    direction: "rtl",
  },
  inputText: {
    textAlign: "right",
    fontFamily: fonts.body_persian,
  },
});
