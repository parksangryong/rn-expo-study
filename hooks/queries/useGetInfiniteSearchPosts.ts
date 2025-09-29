import { getSearchPosts } from "@/api/post";
import { queryKeys } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";

function useGetInfiniteSearchPosts(query: string) {
  return useInfiniteQuery({
    queryKey: [
      queryKeys.POST,
      queryKeys.GET_POSTS,
      queryKeys.GET_SEARCH_POSTS,
      query,
    ],
    queryFn: ({ pageParam = 1 }) => getSearchPosts(pageParam, query),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const lastPost = lastPage[lastPage.length - 1];
      return lastPost ? allPages.length + 1 : undefined;
    },
  });
}

export default useGetInfiniteSearchPosts;
