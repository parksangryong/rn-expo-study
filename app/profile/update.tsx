import { BASE_URL } from "@/api/axios";
import CustomButton from "@/components/CustomButton";
import FixedButtonCTA from "@/components/FixedButtonCTA";
import IntroduceInput from "@/components/IntroduceInput";
import NickNameInput from "@/components/NickNameInput";
import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import { router } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Image, StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";

type FormValues = {
  nickname: string;
  introduce: string;
};

const ProfileUpdateScreen = () => {
  const { auth, updateProfileMutation } = useAuth();
  const profileForm = useForm<FormValues>({
    defaultValues: {
      nickname: auth.nickname,
      introduce: auth.introduce,
    },
  });

  const onSubmit = (formValues: FormValues) => {
    const { nickname, introduce } = formValues;
    updateProfileMutation.mutate(
      { nickname, introduce },
      {
        onSuccess: () => {
          Toast.show({
            type: "success",
            text1: "프로필 수정이 완료되었습니다.",
          });
          router.back();
        },
      }
    );
  };

  return (
    <FormProvider {...profileForm}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            source={
              auth.imageUri
                ? { uri: `${BASE_URL}/${auth.imageUri}` }
                : require("@/assets/images/default-avatar.png")
            }
            style={styles.avatar}
          />
          <CustomButton
            size="medium"
            variant="outlined"
            label="아바타 변경"
            style={styles.avatarButton}
            onPress={() => router.push("/profile/avatar")}
          />
        </View>
        <View style={styles.inputContainer}>
          <NickNameInput />
          <IntroduceInput />
        </View>
      </View>

      <FixedButtonCTA
        label="프로필 수정"
        onPress={profileForm.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  avatarContainer: {
    marginTop: 16,
    position: "relative",
    alignItems: "center",
  },
  avatar: {
    width: 154,
    height: 154,
    borderRadius: 154,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY_500,
  },
  avatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  inputContainer: {
    marginTop: 16,
  },
});

export default ProfileUpdateScreen;
