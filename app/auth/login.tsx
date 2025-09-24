import FixedButtonCTA from "@/components/FixedButtonCTA";
import InputField from "@/components/InputField";
import React from "react";
import { StyleSheet, View } from "react-native";

const login = () => {
  return (
    <>
      <View style={styles.container}>
        <InputField label="이메일" placeholder="이메일을 입력해주세요." />
        <InputField label="비밀번호" placeholder="비밀번호를 입력해주세요." />
      </View>
      <FixedButtonCTA label="로그인" onPress={() => {}} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});

export default login;
