import AuthRoute from "@/components/AuthRoute";
import CommentItem from "@/components/CommentItem";
import FeedItem from "@/components/FeedItem";
import FixedBottomInput from "@/components/FixedBottomInput";
import { colors } from "@/constants";
import useCreateComment from "@/hooks/queries/useCreateComment";
import useGetPost from "@/hooks/queries/useGetPost";
import { useLocalSearchParams } from "expo-router";
import { Fragment, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: post, isPending, isError } = useGetPost(Number(id));
  const createComment = useCreateComment();
  const scrollViewRef = useRef<ScrollView>(null);
  const [parentCommentId, setParentCommentId] = useState<number | null>(null);
  const inputRef = useRef<TextInput>(null);

  if (isPending || isError) {
    return <></>;
  }

  const handleReply = (commentId: number) => {
    setParentCommentId(commentId);
    inputRef.current?.focus();
  };

  const handleCancelReply = () => {
    setParentCommentId(null);
    inputRef.current?.blur();
  };

  const onSubmit = (text: string) => {
    const commentData = {
      content: text,
      postId: post.id,
    };

    if (parentCommentId) {
      createComment.mutate({ ...commentData, parentCommentId });
      handleCancelReply();
      return;
    }

    createComment.mutate(commentData);
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 500);
  };

  return (
    <AuthRoute>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        ref={scrollViewRef}
      >
        <View style={styles.postContainer}>
          <FeedItem post={post} isDetail />
          <Text style={styles.commentCount}>댓글 {post.commentCount}개</Text>
        </View>
        {post.comments?.map((comment) => (
          <Fragment key={comment.id}>
            <CommentItem
              key={comment.id}
              comment={comment}
              parentCommentId={parentCommentId}
              onReply={() => handleReply(comment.id)}
              onCancelReply={handleCancelReply}
            />
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} isReply />
            ))}
          </Fragment>
        ))}
        <View style={styles.bottomContainer} />
      </ScrollView>
      <FixedBottomInput
        onSubmit={onSubmit}
        parentCommentId={parentCommentId}
        ref={inputRef}
      />
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
  bottomContainer: {
    height: 100,
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
