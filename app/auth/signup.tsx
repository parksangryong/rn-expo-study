import FixedButtonCTA from "@/components/FixedButtonCTA";
import InputField from "@/components/InputField";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const signup = () => {
  const [signupValues, setSignupValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChangeInput = (text: string, name: string) => {
    setSignupValues({ ...signupValues, [name]: text });
  };

  const handleSignup = () => {
    if (signupValues.email === "") {
      setError({
        password: "",
        passwordConfirm: "",
        email: "이메일을 입력해주세요.",
      });
      return;
    }
    if (signupValues.password === "") {
      setError({
        passwordConfirm: "",
        email: "",
        password: "비밀번호를 입력해주세요.",
      });
      return;
    }
    if (signupValues.passwordConfirm === "") {
      setError({
        password: "",
        email: "",
        passwordConfirm: "비밀번호를 입력해주세요.",
      });
      return;
    }
    if (signupValues.password !== signupValues.passwordConfirm) {
      setError({
        password: "",
        email: "",
        passwordConfirm: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }
    console.log(signupValues);
  };

  return (
    <>
      <View style={styles.container}>
        <InputField
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={signupValues.email}
          onChangeText={(text) => handleChangeInput(text, "email")}
          error={error.email}
        />
        <InputField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={signupValues.password}
          secureTextEntry
          onChangeText={(text) => handleChangeInput(text, "password")}
          error={error.password}
        />
        <InputField
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요."
          value={signupValues.passwordConfirm}
          secureTextEntry
          onChangeText={(text) => handleChangeInput(text, "passwordConfirm")}
          error={error.passwordConfirm}
        />
      </View>
      <FixedButtonCTA label="회원가입하기" onPress={handleSignup} />
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

export default signup;
