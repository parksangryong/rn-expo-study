import { BASE_URL } from "@/api/axios";
import AuthRoute from "@/components/AuthRoute";
import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MyScreen() {
  const { auth } = useAuth();

  return (
    <AuthRoute>
      <View style={styles.header}>
        <Image
          source={
            auth.imageUri
              ? { uri: `${BASE_URL}/${auth.imageUri}` }
              : require("@/assets/images/default-avatar.png")
          }
          style={styles.avatar}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.profile}>
          <Text style={styles.nickname}>{auth.nickname}</Text>
          <Text style={styles.introduce}>{auth.introduce}</Text>
        </View>
      </View>
    </AuthRoute>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    backgroundColor: colors.ORANGE_200,
    width: "100%",
    height: 154,
  },
  avatar: {
    position: "absolute",
    top: 77,
    left: 16,
    width: 154,
    height: 154,
    borderRadius: 154,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY_500,
  },
  container: { marginTop: 77 },
  profile: {
    padding: 16,
    gap: 16,
  },
  nickname: {
    fontSize: 24,
    fontWeight: "bold",
  },
  introduce: {
    fontSize: 14,
  },
});
