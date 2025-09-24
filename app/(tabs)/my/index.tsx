import { router, useFocusEffect } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyScreen() {
  const isLoggedIn = false;

  useFocusEffect(() => {
    !isLoggedIn && router.replace("/auth");
  });

  return (
    <SafeAreaView>
      <Text>내 정보 스크린</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
