import CustomButton from "@/components/CustomButton";
import DescriptionInput from "@/components/DescriptionInput";
import ImagePreviewList from "@/components/ImagePreviewList";
import PostWriteFooter from "@/components/PostWriteFooter";
import TitleInput from "@/components/TitleInput";
import VoteAttached from "@/components/VoteAttached";
import VoteModal from "@/components/VoteModal";
import useGetPost from "@/hooks/queries/useGetPost";
import useUpdatePost from "@/hooks/queries/useUpdatePost";
import { ImageUri, VoteOption } from "@/types";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

type FormValues = {
  title: string;
  description: string;
  imageUris: ImageUri[];
  isVoteOpen: boolean;
  isVoteAttached: boolean;
  voteOptions: VoteOption[];
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
      isVoteAttached: data?.hasVote,
      isVoteOpen: false,
      voteOptions:
        data?.votes?.flatMap((vote) =>
          vote.options.map((option) => ({
            displayPriority: option.displayPriority,
            content: option.content,
          }))
        ) || [],
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
    <FormProvider {...postForm}>
      <KeyboardAwareScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <TitleInput />
        <View style={styles.descriptionContainer}>
          <DescriptionInput />
          <VoteAttached />
        </View>
        <ImagePreviewList imageUris={postForm.watch("imageUris")} />
      </KeyboardAwareScrollView>
      <PostWriteFooter />
      <VoteModal />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  descriptionContainer: {
    paddingVertical: 16,
    gap: 16,
  },
});
