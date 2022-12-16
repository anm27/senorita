import HomeScreen from "./screens/HomeScreen";
import ParlourScreen from "./screens/ParlourScreen";
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ParlourScreen" component={ParlourScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
