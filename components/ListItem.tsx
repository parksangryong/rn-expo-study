import { colors } from "@/constants";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface ListItemProps extends PressableProps {
  title: string;
  icon?: React.ReactNode;
}

const ListItem = ({ title, icon, ...props }: ListItemProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      {...props}
    >
      {icon}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    borderColor: colors.GRAY_200,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pressed: {
    backgroundColor: colors.GRAY_200,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.BLACK,
  },
});

export default ListItem;
