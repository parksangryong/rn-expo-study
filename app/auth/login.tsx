import EmailInput from "@/components/EmailInput";
import FixedButtonCTA from "@/components/FixedButtonCTA";
import PasswordInput from "@/components/PasswordInput";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

import useAuth from "@/hooks/queries/useAuth";

type FormValues = {
  email: string;
  password: string;
};

const login = () => {
  const { loginMutation } = useAuth();
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formValues: FormValues) => {
    const { email, password } = formValues;
    loginMutation.mutate({
      email,
      password,
    });
  };

  return (
    <FormProvider {...loginForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput />
      </View>
      <FixedButtonCTA
        label="로그인하기"
        onPress={loginForm.handleSubmit(onSubmit)}
      />
    </FormProvider>
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
