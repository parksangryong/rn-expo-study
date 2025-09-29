import FeedList from "@/components/FeedList";
import SearchInput from "@/components/SearchInput";
import { colors } from "@/constants";
import {
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useAuth from "@/hooks/queries/useAuth";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function HomeScreen() {
  const { auth } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <SearchInput
          readOnly
          placeholder="글 제목 검색"
          onPress={() => {
            router.push("/post/search");
          }}
        />
      </View>
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
  searchInputContainer: {
    flexDirection: "row",
    backgroundColor: colors.WHITE,
    gap: 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  logo: {
    width: 44,
    height: 44,
  },
});
