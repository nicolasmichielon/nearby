import { View, Text } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 22 }}>Hello React Native</Text>
    </View>
  );
}
