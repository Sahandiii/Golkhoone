import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { PlantsScreen } from "./src/features/plants/screens/plants.screen";

export default function App() {
  return (
    <>
    <PlantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}