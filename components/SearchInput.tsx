import { colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface SearchInputProps extends TextInputProps {
  onSubmit?: () => void;
}

const SearchInput = ({ onSubmit, ...props }: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        returnKeyType="search"
        placeholderTextColor={colors.GRAY_500}
        onSubmitEditing={onSubmit}
        {...props}
      />
      <Ionicons
        name="search"
        size={20}
        color={colors.GRAY_500}
        onPress={props.onPress ?? onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    height: 44,
    paddingHorizontal: 10,
    backgroundColor: colors.GRAY_100,
    borderRadius: 100,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.BLACK,
    paddingVertical: 0,
    paddingLeft: 0,
  },
});

export default SearchInput;
