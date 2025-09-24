import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.formContainer}>
        <CustomButton label="이메일 로그인" />
        <Link href="/" style={styles.link} replace>
          이메일로 가입하기
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 112,
    height: 112,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 32,
  },
  link: {
    textAlign: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
