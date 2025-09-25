import AuthRoute from "@/components/AuthRoute";
import FeedItem from "@/components/FeedItem";
import FixedBottomInput from "@/components/FixedBottomInput";
import { colors } from "@/constants";
import useGetPost from "@/hooks/queries/useGetPost";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: post, isPending, isError } = useGetPost(Number(id));

  if (isPending || isError) {
    return <></>;
  }

  const onSubmit = (text: string) => {
    console.log(text);
  };

  return (
    <AuthRoute>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.postContainer}>
          <FeedItem post={post} isDetail />
          <Text style={styles.commentCount}>댓글 {post.commentCount}개</Text>
        </View>
      </ScrollView>
      <FixedBottomInput onSubmit={onSubmit} />
    </AuthRoute>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 12,
  },
  contentContainer: {
    backgroundColor: colors.GRAY_100,
  },
  commentCount: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
    backgroundColor: colors.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  inputContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 16,
    backgroundColor: colors.WHITE,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_200,
  },
});
