import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

function NickNameInput() {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      name="nickname"
      control={control}
      rules={{
        validate: (value) => {
          if (value.length < 2) {
            return "닉네임은 2자 이상이어야 합니다.";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          onChangeText={onChange}
          value={value}
          error={error?.message}
          onSubmitEditing={() => {
            setFocus("introduce");
          }}
          submitBehavior="submit"
          returnKeyType="next"
          label="닉네임"
          placeholder="닉네임을 입력해주세요."
        />
      )}
    />
  );
}

export default NickNameInput;
