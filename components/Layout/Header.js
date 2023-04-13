import { StyleSheet, Text, StatusBar, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import useDirection from "../../hooks/useDirection";

const HeaderHeight = 40 + StatusBar.currentHeight;

export default function Header({
  rightIcon,
  onRightClick,
  leftIcon,
  onLeftClick,
  title,
  gradientColors = ["#876F48", "#5C492B"],
}) {
  const { isRtl } = useDirection();

  const styles = getStyles({ isRtl });
  return (
    <View style={styles.root}>
      <StatusBar />
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
      <LinearGradient
        colors={gradientColors}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={styles.bg}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.leftContainer} onPress={onLeftClick}>
            {leftIcon}
          </TouchableOpacity>
          <View style={styles.centerContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <TouchableOpacity
            style={styles.rightContainer}
            onPress={onRightClick}
          >
            {rightIcon}
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const getStyles = ({ isRtl }) =>
  StyleSheet.create({
    root: {
      width: "100%",
      height: HeaderHeight,
      flexDirection: "row",
      alignContent: "center",
    },
    bg: {
      width: "100%",
      height: HeaderHeight,
      paddingTop: StatusBar.currentHeight,
    },
    container: {
      flexDirection: isRtl ? "row-reverse" : "row",
      alignItems: "center",
      flex: 1,
    },
    leftContainer: {
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    },
    rightContainer: {
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 5,
    },
    centerContainer: {
      flex: 1,
      alignItems: "center",
    },
    title: { color: "white" },
  });
