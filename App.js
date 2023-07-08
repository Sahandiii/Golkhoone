import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts as useIranyekan } from "expo-font";

import { theme } from "./src/infrastructure/theme";
import { PlantsScreen } from "./src/features/plants/screens/plants.screen";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [IranyekanLoaded] = useIranyekan({
    IranYekan_Regular: require("./assets/fonts/IRANYekanWebRegular.ttf"),
  });

  if (!oswaldLoaded || !latoLoaded || !IranyekanLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <PlantsScreen />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
