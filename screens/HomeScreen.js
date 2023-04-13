import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadProducts } from "../actions/product";
import { FlatList } from "react-native";
import ProductListItem from "../components/Products/ProductListItem";
import DiscountSlider from "../components/Layout/DiscountSlider";
import Header from "../components/Layout/Header";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import useDirection from "../hooks/useDirection";

export default function HomeScreen({}) {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { isRtl } = useDirection();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(LoadProducts());
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title={t("home.title")}
        leftIcon={
          <FontAwesomeIcon
            size={18}
            icon={isRtl ? faChevronRight : faChevronLeft}
            color="white"
          />
        }
        onLeftClick={() => Alert.alert("No Action")}
        rightIcon={
          <View style={styles.rightIconContainer}>
            <Text style={{ color: "#5C492B" }}>
              {i18n.language == "en" ? "RTL" : "LTR"}
            </Text>
          </View>
        }
        onRightClick={() =>
          i18n.changeLanguage(i18n.language == "en" ? "ar" : "en")
        }
      />

      <FlatList
        ListHeaderComponent={
          <DiscountSlider
            title={t("home.discountTitle")}
            description={t("home.discountDesctiption")}
          />
        }
        data={products}
        numColumns={2}
        renderItem={({ item }) => <ProductListItem item={item} />}
        columnWrapperStyle={{ flexDirection: isRtl ? "row-reverse" : "row" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  rightIconContainer: {
    backgroundColor: "white",
    paddingHorizontal: 5,
    borderRadius: 3,
  },
});
