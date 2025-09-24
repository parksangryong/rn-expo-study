import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

const EmailInput = () => {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="email"
      control={control}
      rules={{
        validate: (value) => {
          if (value.length === 0) {
            return "이메일을 입력해주세요.";
          }
          if (!/^\S+@\S+\.\S+$/.test(value)) {
            return "이메일 형식이 올바르지 않습니다.";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          label="이메일"
          placeholder="이메일을 입력해주세요."
          onChangeText={onChange}
          inputMode="email"
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => {
            setFocus("password");
          }}
          value={value}
          error={error?.message}
        />
      )}
    />
  );
};

export default EmailInput;
