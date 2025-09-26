import CustomButton from "@/components/CustomButton";
import DescriptionInput from "@/components/DescriptionInput";
import ImagePreviewList from "@/components/ImagePreviewList";
import PostWriteFooter from "@/components/PostWriteFooter";
import TitleInput from "@/components/TitleInput";
import VoteModal from "@/components/VoteModal";
import useCreatePost from "@/hooks/queries/useCreatePost";
import { ImageUri, VoteOption } from "@/types";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

type FormValues = {
  title: string;
  description: string;
  imageUris: ImageUri[];
  isVoteOpen: boolean;
  voteOptions: VoteOption[];
};

export default function PostWriteScreen() {
  const navigation = useNavigation();
  const createPostMutation = useCreatePost();
  const postForm = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
      imageUris: [],
      isVoteOpen: false,
      voteOptions: [{ displayPriority: 0, content: "" }],
    },
  });

  const imageUris = useWatch({
    control: postForm.control,
    name: "imageUris",
  });

  const onSubmit = (formValues: FormValues) => {
    createPostMutation.mutate(formValues);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
          label="게시"
          size="medium"
          variant="standard"
          onPress={postForm.handleSubmit(onSubmit)}
        />
      ),
    });
  }, []);

  return (
    <FormProvider {...postForm}>
      <KeyboardAwareScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <TitleInput />
        <View style={styles.descriptionContainer}>
          <DescriptionInput />
        </View>
        <ImagePreviewList imageUris={imageUris} />
      </KeyboardAwareScrollView>
      <PostWriteFooter />
      <VoteModal />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 16,
  },
  descriptionContainer: {
    paddingVertical: 16,
  },
});
