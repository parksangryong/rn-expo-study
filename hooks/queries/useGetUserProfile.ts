import { getUserProfile } from "@/api/auth";
import { queryKeys } from "@/constants";
import { useQuery } from "@tanstack/react-query";

function useGetUserProfile(id: number) {
  return useQuery({
    queryKey: [queryKeys.AUTH, queryKeys.GET_USER_PROFILE, id],
    queryFn: () => getUserProfile(Number(id)),
    enabled: Boolean(id),
  });
}

export default useGetUserProfile;
