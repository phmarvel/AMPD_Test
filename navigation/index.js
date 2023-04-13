import HomeScreen from "../screens/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Scene, Router, Stack } from "react-native-router-flux";
import { I18nManager, View } from "react-native";
import * as Updates from "expo-updates";

export default function Navigation({}) {
  if (I18nManager.isRTL) {
    I18nManager.forceRTL(false);
    Updates.reloadAsync();
  }

  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="Home" component={HomeScreen} />
        <Scene key="ProductDetails" component={ProductDetailsScreen} />
      </Stack>
    </Router>
  );
}
