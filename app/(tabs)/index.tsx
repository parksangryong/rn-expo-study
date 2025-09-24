import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스크린</Text>
      <CustomButton
        label="작성하기"
        onPress={() => {
          router.push("/auth");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
