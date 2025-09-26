import { colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface PostWriteFooterProps {}

const PostWriteFooter = ({}: PostWriteFooterProps) => {
  const insets = useSafeAreaInsets();

  const handleOpenImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsMultipleSelection: true,
    });

    if (result.canceled) {
      return;
    }

    console.log(result.assets);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <Pressable style={styles.footerIcon} onPress={handleOpenImagePicker}>
        <Ionicons name="camera" size={20} color={colors.BLACK} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300,
    backgroundColor: colors.WHITE,
    gap: 10,
  },
  footerIcon: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.GRAY_100,
  },
});

export default PostWriteFooter;
