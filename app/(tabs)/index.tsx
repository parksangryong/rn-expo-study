import FeedList from "@/components/FeedList";
import { colors } from "@/constants";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAuth from "@/hooks/queries/useAuth";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function HomeScreen() {
  const { auth } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <FeedList />
      {auth.id && (
        <Pressable
          style={styles.writeButton}
          onPress={() => {
            router.push("/post/write");
          }}
        >
          <Ionicons name="pencil" size={32} color={colors.WHITE} />
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  writeButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: colors.ORANGE_600,
    borderRadius: 100,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 2px 6px 0 rgba(0, 0, 0, 0.3)",
  },
});
