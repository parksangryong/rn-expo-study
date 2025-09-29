import { BASE_URL } from "@/api/axios";
import CustomButton from "@/components/CustomButton";
import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Image, StyleSheet, View } from "react-native";

const ProfileUpdateScreen = () => {
  const { auth } = useAuth();
  const profileForm = useForm({
    defaultValues: {
      nickname: auth.nickname,
      introduce: auth.introduce,
    },
  });

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
          />
        </View>
        <View style={styles.inputContainer}></View>
      </View>
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
