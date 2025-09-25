import { colors } from "@/constants";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputField from "./InputField";

interface FixedButtonCTAProps {}

const FixedButtonCTA = ({}: FixedButtonCTAProps) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardStickyView offset={{ closed: 0, opened: insets.bottom - 16 || 0 }}>
      <View
        style={[styles.inputContainer, { paddingBottom: insets.bottom || 16 }]}
      >
        <InputField
          placeholder="댓글을 남겨보세요."
          rightChild={
            <Pressable style={styles.inputButtonContainer}>
              <Text style={styles.inputButtonText}>등록</Text>
            </Pressable>
          }
        />
      </View>
    </KeyboardStickyView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: colors.WHITE,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_200,
  },
  inputButtonContainer: {
    backgroundColor: colors.ORANGE_600,
    padding: 8,
    borderRadius: 5,
  },
  inputButtonText: {
    color: colors.WHITE,
    fontWeight: "bold",
  },
});

export default FixedButtonCTA;
