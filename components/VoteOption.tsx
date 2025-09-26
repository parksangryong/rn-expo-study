import { colors } from "@/constants";
import { PostVoteOption } from "@/types";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface VoteOptionProps {
  option: PostVoteOption;
  totalCount: number;
  isVoted: boolean;
  isSelected: boolean;
  onSelectOption: () => void;
}

const VoteOption = ({
  option,
  totalCount,
  isVoted,
  isSelected,
  onSelectOption,
}: VoteOptionProps) => {
  return (
    <>
      {isVoted ? (
        <View></View>
      ) : (
        <Pressable
          onPress={onSelectOption}
          style={isSelected ? styles.selectedContainer : styles.container}
        >
          <Text style={styles.content}>{option.content}</Text>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  selectedContainer: {
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.ORANGE_600,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  container: {
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  content: {
    marginLeft: 10,
  },
});

export default VoteOption;
