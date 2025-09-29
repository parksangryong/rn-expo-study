import { colors } from "@/constants";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface TabProps {
  isActive: boolean;
  onPress?: () => void;
  children: React.ReactNode;
}

const Tab = ({ isActive, onPress, children }: TabProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isActive && styles.active]}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 38,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.WHITE,
  },
  active: {
    borderBottomColor: colors.BLACK,
  },
  text: {
    fontSize: 14,
    color: colors.GRAY_500,
  },
  activeText: {
    color: colors.BLACK,
    fontWeight: "700",
  },
});

export default Tab;
