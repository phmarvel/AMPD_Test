import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AD1457",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
    marginBottom: 10,
  },
  titleText: {
    color: "white",
  },
  descriptionText: {
    color: "white",
    fontSize: 10,
  },
});
