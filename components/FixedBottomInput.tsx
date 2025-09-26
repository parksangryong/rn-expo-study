import { colors } from "@/constants";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputField from "./InputField";

interface FixedButtonCTAProps {
  onSubmit: (text: string) => void;
  parentCommentId?: number | null;
  ref?: React.RefObject<TextInput | null>;
}

const FixedButtonCTA = ({
  onSubmit,
  parentCommentId,
  ref,
}: FixedButtonCTAProps) => {
  const insets = useSafeAreaInsets();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.length === 0) return;

    onSubmit(text);
    setText("");
  };

  return (
    <KeyboardStickyView offset={{ closed: 0, opened: insets.bottom - 16 || 0 }}>
      <View
        style={[styles.inputContainer, { paddingBottom: insets.bottom || 16 }]}
      >
        <InputField
          placeholder={
            parentCommentId ? "답글 남기는 중..." : "댓글을 남겨보세요."
          }
          ref={ref}
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
          returnKeyType="send"
          rightChild={
            <Pressable
              style={[
                styles.inputButtonContainer,
                !text && styles.inputButtonDisabled,
              ]}
              onPress={handleSubmit}
              disabled={text.length === 0}
            >
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
  inputButtonDisabled: {
    backgroundColor: colors.GRAY_300,
  },
});

export default FixedButtonCTA;
