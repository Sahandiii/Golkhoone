import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, FlatList } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { PlantInfoCard } from "../components/plant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { fonts } from "../../../infrastructure/theme/fonts";

import { PlantsContext } from "../../../services/plants/plants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const PlantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const PlantsScreen = () => {
  // eslint-disable-next-line prettier/prettier
  const {isLoading, error, plants} = useContext(PlantsContext);
  return (
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
        data={plants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <PlantInfoCard plant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

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
