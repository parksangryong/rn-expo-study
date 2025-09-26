import { colors } from "@/constants";
import { VoteOption } from "@/types";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import VoteInput from "./VoteInput";

interface VoteModalProps {}

const VoteModal = ({}: VoteModalProps) => {
  const { control, setValue } = useFormContext();
  const isVoteOpen = useWatch({ control, name: "isVoteOpen" });
  const voteOptions = useWatch({ control, name: "voteOptions" });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "voteOptions",
  });

  const insets = useSafeAreaInsets();

  const handleAddVoteOption = () => {
    const priorties = voteOptions.map(
      (vote: VoteOption) => vote.displayPriority
    );
    const nextPriority = Math.max(...priorties) + 1;
    append({ displayPriority: nextPriority, content: "" });
  };

  const handleSubmit = () => {
    if (voteOptions.length < 2) {
      Alert.alert("투표 항목을 최소 2개 이상 추가해주세요.");
      return;
    }

    setValue("isVoteAttached", true);
    setValue("isVoteOpen", false);
  };

  return (
    <Modal visible={isVoteOpen} animationType="slide">
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={[styles.header]}>
          <Pressable
            style={styles.closeButton}
            onPress={() => setValue("isVoteOpen", false)}
          >
            <Feather name="arrow-left" size={28} color={colors.BLACK} />
          </Pressable>
          <Text style={styles.title}>투표</Text>
          <Text style={styles.rightHeader} onPress={handleSubmit}>
            첨부
          </Text>
        </View>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.contentContainer}
        >
          {fields.map((field, index) => (
            <VoteInput
              key={field.id}
              index={index}
              onRemove={() => remove(index)}
            />
          ))}
          <Pressable onPress={handleAddVoteOption}>
            <Text style={styles.addButton}>+ 항목 추가</Text>
          </Pressable>
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.BLACK,
  },
  rightHeader: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.ORANGE_600,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  contentContainer: {
    gap: 12,
    padding: 16,
  },
  addButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.GRAY_500,
    textAlign: "center",
    paddingTop: 5,
  },
});

export default VoteModal;
