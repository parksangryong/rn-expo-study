import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface VoteModalProps {}

const VoteModal = ({}: VoteModalProps) => {
  const { control, setValue } = useFormContext();
  const isVoteOpen = useWatch({ control, name: "isVoteOpen" });
  const fields = useFieldArray({ control, name: "voteOptions" });

  const insets = useSafeAreaInsets();

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
          <Text style={styles.rightHeader}>첨부</Text>
        </View>
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
});

export default VoteModal;
