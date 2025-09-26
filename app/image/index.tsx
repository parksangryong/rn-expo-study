import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Dimensions, Image, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ImageZoomeScreen() {
  const { uri } = useLocalSearchParams<{ uri: string }>();
  const inset = useSafeAreaInsets();
  const Demension = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.backButton, { top: inset.top + 10 }]}
        onPress={() => router.back()}
      >
        <Feather name="arrow-left" size={24} color={colors.WHITE} />
      </Pressable>
      <Image
        source={{ uri }}
        resizeMode="contain"
        style={[{ width: Demension.width, height: "100%" }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    left: 15,
    zIndex: 1,
    backgroundColor: colors.BLACK,
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
