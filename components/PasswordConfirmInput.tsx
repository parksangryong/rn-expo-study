import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import InputField from "./InputField";

const PasswordConfirmInput = () => {
  const { control } = useFormContext();
  const password = useWatch({ control, name: "password" });

  return (
    <Controller
      name="passwordConfirm"
      control={control}
      rules={{
        validate: (value) => {
          if (value !== password) {
            return "비밀번호가 일치하지 않습니다.";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label="비밀번호 확인"
          placeholder="비밀번호를 확인해주세요."
          onChangeText={onChange}
          secureTextEntry
          textContentType="oneTimeCode"
          value={value}
          error={error?.message}
        />
      )}
    />
  );
};

export default PasswordConfirmInput;
