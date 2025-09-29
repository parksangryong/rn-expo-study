import {
  getBottoms,
  getFaces,
  getHands,
  getHats,
  getSkins,
  getTops,
} from "@/api/avatar";
import { queryKeys } from "@/constants";
import { useQueries } from "@tanstack/react-query";

function useGetAvatarItems() {
  const [
    hatsQuery,
    facesQuery,
    topsQuery,
    bottomsQuery,
    handsQuery,
    skinsQuery,
  ] = useQueries({
    queries: [
      {
        queryKey: [queryKeys.AVATAR, queryKeys.AVATAR_HATS],
        queryFn: () => getHats(),
      },
      {
        queryKey: [queryKeys.AVATAR, queryKeys.AVATAR_FACES],
        queryFn: () => getFaces(),
      },
      {
        queryKey: [queryKeys.AVATAR, queryKeys.AVATAR_TOPS],
        queryFn: () => getTops(),
      },
      {
        queryKey: [queryKeys.AVATAR, queryKeys.AVATAR_BOTTOMS],
        queryFn: () => getBottoms(),
      },
      {
        queryKey: [queryKeys.AVATAR, queryKeys.AVATAR_HANDS],
        queryFn: () => getHands(),
      },
      {
        queryKey: [queryKeys.AVATAR, queryKeys.AVATAR_SKINS],
        queryFn: () => getSkins(),
      },
    ],
  });

  return {
    hats: hatsQuery.data || [],
    faces: facesQuery.data || [],
    tops: topsQuery.data || [],
    bottoms: bottomsQuery.data || [],
    hands: handsQuery.data || [],
    skins: skinsQuery.data || [],
  };
}

export default useGetAvatarItems;
