import CustomButton from "@/components/CustomButton";
import DescriptionInput from "@/components/DescriptionInput";
import TitleInput from "@/components/TitleInput";
import useGetPost from "@/hooks/queries/useGetPost";
import useUpdatePost from "@/hooks/queries/useUpdatePost";
import { ImageUri } from "@/types";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

type FormValues = {
  title: string;
  description: string;
  imageUris: ImageUri[];
};

export default function PostUpdateScreen() {
  const { id } = useLocalSearchParams();
  const { data } = useGetPost(Number(id));
  const updatePost = useUpdatePost();

  const navigation = useNavigation();
  const postForm = useForm<FormValues>({
    defaultValues: {
      title: data?.title,
      description: data?.description,
      imageUris: data?.imageUris,
    },
  });

  const onSubmit = (formValues: FormValues) => {
    updatePost.mutate(
      { id: Number(id), body: formValues },
      {
        onSuccess: () => {
          router.back();
        },
      }
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
          label="수정"
          size="medium"
          variant="standard"
          onPress={postForm.handleSubmit(onSubmit)}
        />
      ),
    });
  }, []);

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <FormProvider {...postForm}>
        <TitleInput />
        <DescriptionInput />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 16,
  },
});
