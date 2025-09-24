import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

const PasswordInput = () => {
  const { control } = useFormContext();

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
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          onChangeText={onChange}
          secureTextEntry
          value={value}
          error={error?.message}
        />
      )}
    />
  );
};

export default PasswordInput;
