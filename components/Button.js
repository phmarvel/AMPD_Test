import { StyleSheet, Text, StatusBar, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

export default function Button({
  text,
  onPress,
  gradientColors = ["#8FBC4B", "#48661A"],
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={["rgba(0,0,0,0.8)", "transparent"]} />
      <LinearGradient
        colors={gradientColors}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={{ paddingVertical: 10, borderRadius: 20 }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
