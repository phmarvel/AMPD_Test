import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import useDirection from "../../hooks/useDirection";
import { Actions } from "react-native-router-flux";

export default ({ item }) => {
  const { isRtl } = useDirection();
  const styles = useStyle({ isRtl });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Actions.ProductDetails({ product: item })}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <Text style={styles.brandText}>{item.brand}</Text>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const useStyle = ({ isRtl }) =>
  StyleSheet.create({
    container: {
      width: "50%",
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    image: {
      height: 100,
      width: "100%",
    },
    brandText: {
      color: "#7E6641",
      fontSize: 10,
      marginTop: 5,
      textAlign: isRtl ? "right" : "left",
    },
    titleText: {
      fontSize: 12,
      fontWeight: "bold",
      textAlign: isRtl ? "right" : "left",
    },
    priceText: {
      color: "#777",
      fontSize: 10,
      fontWeight: "bold",
      textAlign: isRtl ? "right" : "left",
    },
  });
