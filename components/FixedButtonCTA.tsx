import CustomButton from "@/components/CustomButton";
import { colors } from "@/constants";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface FixedButtonCTAProps {
  label: string;
  onPress: () => void;
  showBottomBorder?: boolean;
}

const FixedButtonCTA = ({
  label,
  onPress,
  showBottomBorder = true,
}: FixedButtonCTAProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom || 12 },
        showBottomBorder && styles.bottomBorder,
      ]}
    >
      <CustomButton label={label} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  bottomBorder: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300,
  },
});

export default FixedButtonCTA;
