import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextInputProps } from "react-native";
import InputField from "./InputField";

interface PasswordInputProps {
  submitBehavior?: TextInputProps["submitBehavior"];
}

const PasswordInput = ({
  submitBehavior = "blurAndSubmit",
}: PasswordInputProps) => {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="password"
      control={control}
      rules={{
        validate: (value) => {
          if (value.length < 8) {
            return "비밀번호는 8자 이상이어야 합니다.";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          submitBehavior={submitBehavior}
          onSubmitEditing={() => {
            setFocus("passwordConfirm");
          }}
          onChangeText={onChange}
          secureTextEntry
          value={value}
          textContentType="oneTimeCode"
          error={error?.message}
        />
      )}
    />
  );
};

export default PasswordInput;
