import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";

function IntroduceInput() {
  const { control } = useFormContext();

  return (
    <Controller
      name="introduce"
      control={control}
      rules={{
        validate: (value) => {
          if (value.length < 2) {
            return "소개는 2자 이상이어야 합니다.";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          onChangeText={onChange}
          value={value}
          error={error?.message}
          returnKeyType="done"
          label="소개"
          placeholder="소개를 입력해주세요."
        />
      )}
    />
  );
}

export default IntroduceInput;
