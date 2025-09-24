import { colors } from "@/constants";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  label: string;
  size?: "medium" | "large";
  variant?: "filled";
}

const CustomButton = ({
  label,
  size = "large",
  variant = "filled",
  ...props
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        styles[size],
        styles[variant],
        pressed && styles.pressed,
      ]}
      {...props}
    >
      <Text style={styles[variant]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  medium: {
    padding: 10,
  },
  large: {
    height: 44,
    width: "100%",
  },
  filled: {
    backgroundColor: colors.ORANGE_600,
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.8,
  },
});

export default CustomButton;
