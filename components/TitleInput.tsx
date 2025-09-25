import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

const TitleInput = () => {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="title"
      control={control}
      rules={{
        validate: (value) => {
          if (value.length === 0) {
            return "제목을 입력해주세요.";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          label="제목"
          placeholder="제목을 입력해주세요."
          onChangeText={onChange}
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => {
            setFocus("description");
          }}
          value={value}
          error={error?.message}
        />
      )}
    />
  );
};

export default TitleInput;
