import { colors } from "@/constants";
import { postFormatDate } from "@/utils/dateFormat";

import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface ProfileProps {
  nickname: string;
  imageUri?: string;
  createdAt: string;
  onPress: () => void;
  options?: React.ReactNode;
}

const Profile = ({
  nickname,
  imageUri,
  createdAt,
  onPress,
  options,
}: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.profileContainer}>
        <Image
          source={
            imageUri
              ? { uri: imageUri }
              : require("@/assets/images/default-avatar.png")
          }
          style={styles.avatar}
        />
        <View style={styles.nicknameContainer}>
          <Text style={styles.nickname}>{nickname}</Text>
          <Text style={styles.createdAt}>{postFormatDate(createdAt)}</Text>
        </View>
      </Pressable>
      {options}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GRAY_300,
  },
  nickname: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.BLACK,
  },
  createdAt: {
    fontSize: 14,
    color: colors.GRAY_500,
  },
  nicknameContainer: {
    gap: 4,
  },
});

export default Profile;
