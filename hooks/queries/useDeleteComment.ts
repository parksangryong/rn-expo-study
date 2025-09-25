import { deleteComment } from "@/api/comment";
import queryClient from "@/api/queryClient";
import { queryKeys } from "@/constants";
import { useMutation } from "@tanstack/react-query";

function useDeleteComment() {
  return useMutation({
    mutationFn: deleteComment,
    onSuccess: (commentId) => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POST, commentId],
      });
    },
  });
}

export default useDeleteComment;
