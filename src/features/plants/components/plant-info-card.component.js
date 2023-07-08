import React from "react";
import { StyleSheet, View } from "react-native";
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
    name = "مونسترا برگ انجیری",
    description = "گیاه برگ‌انجیری که با نام مونسترا هم شناخته می‌شود، بومی جنگل‌های بارانی در آمریکای مرکزی است.",
    photos = [
      "https://www.thetutuguru.com.au/wp-content/uploads/2020/12/Monstera-deliciosa-fruit-salad-plant-2.jpg",
    ],
    difficultyLevel = 2,
    sunLevel = 3,
  } = plant;

  const sunlevelArray = Array.from(new Array(Math.floor(sunLevel)));
  return (
    <PlantCard elevation={5}>
      <PlantCardCover key={name} source={{ uri: photos[0] }} />
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

