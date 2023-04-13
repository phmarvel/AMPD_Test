import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import useDirection from "../../hooks/useDirection";
import StarRating from "../../components/react-native-star-rating-widget";

export default function Comment({ rating, title, date, comment, name }) {
  const { isRtl } = useDirection();
  const styles = useStyle({ isRtl });
  return (
    <View style={styles.container}>
      <View style={styles.headSection}>
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <StarRating
            enableSwiping={true}
            enableHalfStar={true}
            maxStars={5}
            rating={rating}
            onChange={() => {}}
            starSize={15}
            style={{ marginTop: 5 }}
          />
        </View>
        <View style={{ marginRight: isRtl ? 0 : 8, marginLeft: isRtl ? 8 : 0 }}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
      <Text style={{ margin: 8, textAlign: isRtl ? "right" : "left" }}>
        {comment}
      </Text>
    </View>
  );
}

const useStyle = ({ isRtl }) =>
  StyleSheet.create({
    container: {
      backgroundColor: "white",
      paddingVertical: 10,
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      marginBottom: 15,
    },
    headSection: {
      flexDirection: isRtl ? "row-reverse" : "row",
      justifyContent: "space-between",
    },
    dateText: {
      fontSize: 12,
      color: "#777",
      textAlign: isRtl ? "left" : "right",
      marginTop: 5,
    },
    nameText: {
      textAlign: isRtl ? "left" : "right",
      fontSize: 14,
    },
    titleText: {
      textAlign: isRtl ? "right" : "left",
      fontSize: 14,
      marginLeft: isRtl ? 0 : 8,
      marginRight: isRtl ? 8 : 0,
    },
  });
