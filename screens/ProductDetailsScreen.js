import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Layout/Header";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "react-native";
import { useTranslation } from "react-i18next";
import useDirection from "../hooks/useDirection";
import { Actions } from "react-native-router-flux";
import { Image } from "react-native";
import Button from "../components/Button";
import SelectDropdown from "react-native-select-dropdown";
import { useState } from "react";
import StarRating from "../components/react-native-star-rating-widget";
import Comment from "../components/Products/Comment";

export default function ProductDetailsScreen({ product }) {
  const { t, i18n } = useTranslation();
  const { isRtl } = useDirection();
  const [Quantity, setQuantity] = useState(1);
  const styles = useStyle({ isRtl });

  return (
    <View style={styles.container}>
      <Header
        title={t("productDetails.title")}
        rightIcon={<FontAwesomeIcon size={18} icon={faTimes} color="white" />}
        onRightClick={() => Actions.pop()}
        gradientColors={["#8FBC4B", "#48661A"]}
      />
      <ScrollView>
        <View>
          <Image
            source={{
              uri: product.thumbnail,
            }}
            style={styles.productImage}
          />
        </View>
        <View style={styles.productContainer}>
          <View style={styles.productInfo}>
            <View>
              <Text style={styles.titleText}>{product.title}</Text>
              <Text style={styles.brandText}>{product.brand}</Text>
            </View>
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.priceText}>$ {product.price}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          <View
            style={{
              flexDirection: isRtl ? "row" : "row-reverse",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: isRtl ? "row-reverse" : "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.priceText}>$ {product.price * Quantity}</Text>
              <View>
                <SelectDropdown
                  data={Array.from({ length: product.stock }, (v, k) => k + 1)}
                  defaultValue={Quantity}
                  onSelect={(selectedItem, index) => {
                    setQuantity(selectedItem);
                  }}
                  buttonStyle={{
                    margin: 0,
                    padding: 0,
                    backgroundColor: "white",
                    width: 60,
                    marginRight: isRtl ? 0 : 10,
                    marginLeft: isRtl ? 10 : 0,
                    height: 30,
                  }}
                />
              </View>
            </View>
          </View>

          <Button
            text={t("productDetails.buyit")}
            onPress={() => {
              Alert.alert(
                t("productDetails.buyit"),
                t("productDetails.buyitConfirm"),
                [
                  {
                    text: t("productDetails.no"),
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: t("productDetails.yes"),
                    onPress: () => console.log("OK Pressed"),
                  },
                ]
              );
            }}
          />

          <View
            style={{
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <View
              style={{ flex: 1, alignItems: isRtl ? "flex-end" : "flex-start" }}
            >
              <Text style={{ fontSize: 35 }}>{product.rating}</Text>
            </View>
            <View style={{ alignItems: isRtl ? "flex-end" : "flex-start" }}>
              <StarRating
                enableSwiping={true}
                enableHalfStar={true}
                maxStars={5}
                rating={product.rating}
                onChange={() => {}}
                starSize={25}
              />
              <Text
                style={{
                  paddingLeft: isRtl ? 0 : 8,
                  paddingRight: isRtl ? 8 : 0,
                  fontSize: 12,
                }}
              >
                {t("productDetails.reviewsNote")}
              </Text>
            </View>
          </View>
          <View style={{ marginVertical: 30 }}>
            {Array.from({ length: 5 }, (v, k) => k + 1).map(() => (
              <Comment
                comment="comment .................."
                date="October 2th 2018"
                name="Regina Joolin"
                title="Nice Product"
                rating={product.rating}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const useStyle = ({ isRtl }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F6F8",
    },
    productContainer: { margin: 10 },
    brandText: {
      color: "#94C54E",
      fontSize: 12,
      textAlign: isRtl ? "right" : "left",
    },
    titleText: {
      fontSize: 14,
      fontWeight: "bold",
      textAlign: isRtl ? "right" : "left",
    },
    priceText: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: isRtl ? "right" : "left",
    },
    productInfo: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    },
    productImage: {
      width: "100%",
      height: 250,
    },
    description: {
      textAlign: isRtl ? "right" : "left",
      marginBottom: 10,
      fontSize: 10,
    },
  });
