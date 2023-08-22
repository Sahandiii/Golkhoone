import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import sun from "../../../../assets/sun";
import difficulty from "../../../../assets/difficulty";

import {
  PlantCard,
  PlantCardCover,
  Descript,
  Info,
  SunLeveling,
  Section,
  SectionEnd,
} from "./plant-info-card.styles";

export const PlantInfoCard = ({ plant = {} }) => {
  const {
    name = "",
    description = "",
    photo = 0,
    difficultyLevel = 2,
    sunLevel = 3,
  } = plant;

  const sunlevelArray = Array.from(new Array(Math.floor(sunLevel)));

  return (
    <PlantCard elevation={5}>
      <PlantCardCover key={name} Image source={photo} />
      {/* <PlantCardCover key={name} Image source={require("../../../../assets/plantPhotos/Dracaena-Compacta.jpg")} /> */}
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <SunLeveling>
            {sunlevelArray.map(() => (
              <SvgXml xml={sun} width={20} height={20} fill="#728C69" />
            ))}
          </SunLeveling>
          <SectionEnd>
            {difficultyLevel == 2 && <Text variant="error">MEDIUM</Text>}
            <Spacer position="left" size="large">
              <SvgXml xml={difficulty} width={20} height={20} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Descript>{description}</Descript>
      </Info>
    </PlantCard>
  );
};
