import React from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import StarIcon, { StarIconProps } from "./StarIcon";
import { getStars } from "./utils";

const defaultColor = "#fdd835";

const StarRatingDisplay = ({
  rating,
  maxStars = 5,
  starSize = 32,
  color = defaultColor,
  emptyColor = color,
  style,
  starStyle,
  StarIconComponent = StarIcon,
  testID,
}) => {
  return (
    <View style={[styles.starRating, style]} testID={testID}>
      {getStars(rating, maxStars).map((starType, i) => {
        return (
          <View key={i} style={[styles.star, starStyle]}>
            <StarIconComponent
              type={starType}
              size={starSize}
              color={starType === "empty" ? emptyColor : color}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  starRating: {
    flexDirection: "row",
  },
  star: {
    marginHorizontal: 5,
  },
});

export default StarRatingDisplay;
