import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts as useIranyekan } from "expo-font";

import { theme } from "./src/infrastructure/theme";
import { PlantsScreen } from "./src/features/plants/screens/plants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { PlantsContextProvider } from "./src/services/plants/plants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Plants: "tree",
  Education: "book",
  MyPlants: "flower",
};

const Education = () => (
  <SafeArea>
    <Text>Education</Text>
  </SafeArea>
);
const MyPlants = () => (
  <SafeArea>
    <Text>My plants</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Entypo name={iconName} size={size} color={color} />
    ),
  };
};

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
        <PlantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "#556B2F",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Plants" component={PlantsScreen} />
              <Tab.Screen name="Education" component={Education} />
              <Tab.Screen name="MyPlants" component={MyPlants} />
            </Tab.Navigator>
          </NavigationContainer>
        </PlantsContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
