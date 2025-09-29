import { colors } from "@/constants";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

interface CustomButtonProps extends PressableProps {
  label: string;
  size?: "medium" | "large";
  variant?: "filled" | "standard" | "outlined";
  style?: StyleProp<ViewStyle>;
}

const CustomButton = ({
  label,
  size = "large",
  variant = "filled",
  style = null,
  ...props
}: CustomButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        styles[size],
        styles[variant],
        pressed && styles.pressed,
        props.disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      <Text
        style={[
          styles[`${variant}Text`],
          props.disabled && styles.disabledText,
        ]}
      >
        {label}
      </Text>
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
    alignSelf: "center",
    height: 38,
    paddingHorizontal: 12,
  },
  large: {
    height: 44,
    width: "100%",
  },
  filled: {
    backgroundColor: colors.ORANGE_600,
  },
  pressed: {
    opacity: 0.8,
  },
  standard: {
    backgroundColor: colors.WHITE,
  },
  disabled: {
    backgroundColor: colors.GRAY_300,
  },
  disabledText: {
    color: colors.GRAY_500,
  },
  filledText: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: "bold",
  },
  standardText: {
    color: colors.ORANGE_600,
    fontSize: 14,
    fontWeight: "bold",
  },
  outlined: {
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.ORANGE_600,
  },
  outlinedText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.ORANGE_600,
  },
});

export default CustomButton;
