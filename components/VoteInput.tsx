import { colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Pressable, StyleSheet } from "react-native";
import InputField from "./InputField";

interface VoteInputProps {
  index: number;
  onRemove: () => void;
}

const VoteInput = ({ index, onRemove }: VoteInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={`voteOptions.${index}.content`}
      control={control}
      rules={{
        validate: (value) => {
          if (value.length === 0) {
            return "내용을 입력해주세요.";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          onChangeText={onChange}
          value={value}
          error={error?.message}
          variant="standard"
          rightChild={
            <Pressable onPress={onRemove}>
              <Ionicons name="close" size={20} color={colors.BLACK} />
            </Pressable>
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default VoteInput;
