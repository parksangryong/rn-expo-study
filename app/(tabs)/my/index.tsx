import AuthRoute from "@/components/AuthRoute";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyScreen() {
  return (
    <AuthRoute>
      <SafeAreaView>
        <Text>내 정보 스크린</Text>
      </SafeAreaView>
    </AuthRoute>
  );
}

const styles = StyleSheet.create({});
