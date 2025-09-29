import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import useDeleteComment from "@/hooks/queries/useDeleteComment";
import { Comment } from "@/types";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import InputField from "./InputField";
import Profile from "./Profile";

interface CommentItemProps {
  comment: Comment;
  isReply?: boolean;
  parentCommentId?: number | null;
  onReply?: () => void;
  onCancelReply?: () => void;
}

const CommentItem = ({
  comment,
  isReply = false,
  parentCommentId,
  onReply,
  onCancelReply,
}: CommentItemProps) => {
  const { auth } = useAuth();
  const { showActionSheetWithOptions } = useActionSheet();
  const deleteComment = useDeleteComment();

  const getCommentBackgroud = () => {
    if (parentCommentId === comment.id) {
      return colors.ORANGE_100;
    }
    if (isReply) {
      return colors.GRAY_50;
    }
    return colors.WHITE;
  };

  const handlePressOptions = () => {
    const options = ["삭제", "취소"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
      },
      (index) => {
        switch (index) {
          case destructiveButtonIndex:
            deleteComment.mutate(comment.id);
            break;
          case cancelButtonIndex:
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <View
      style={[styles.container, { backgroundColor: getCommentBackgroud() }]}
    >
      <View style={styles.profileContainer}>
        {isReply && (
          <MaterialCommunityIcons
            name="arrow-right-bottom"
            size={24}
            color={colors.BLACK}
          />
        )}
        <Profile
          nickname={comment.isDeleted ? "(삭제)" : comment.user.nickname}
          imageUri={comment.isDeleted ? "" : comment.user.imageUri}
          createdAt={comment.createdAt}
          onPress={() => {
            if (!comment.isDeleted) {
              router.push(`/profile/${comment.user.id}`);
            }
          }}
          options={
            auth.id === comment.user.id && (
              <Ionicons
                name="ellipsis-vertical"
                size={24}
                color={colors.BLACK}
                onPress={handlePressOptions}
              />
            )
          }
        />
      </View>
      <InputField
        editable={false}
        value={comment.isDeleted ? "삭제된 댓글입니다." : comment.content}
      />
      {!comment.isDeleted && !isReply && (
        <View style={styles.replyButtonContainer}>
          <Pressable onPress={onReply}>
            <Text style={styles.replyButton}>답글 남기기</Text>
          </Pressable>
          {parentCommentId === comment.id && (
            <Pressable onPress={onCancelReply}>
              <Text style={styles.cancelButton}>취소</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: colors.GRAY_200,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  replyButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  replyButton: {
    fontSize: 12,
    color: colors.ORANGE_600,
    fontWeight: "bold",
  },
  cancelButton: {
    fontSize: 12,
    color: colors.BLACK,
    fontWeight: "bold",
  },
});

export default CommentItem;
