import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { MUTATION_KEY, QUERY_KEY } from "../../enum";
import { UserType } from "../../type";
import { getProfile, signIn } from "./auth.api";
import { SignInPayloadType } from "./auth.type";

export const useSignIn = () => {
  return useMutation<UserType, AxiosError, SignInPayloadType>({
    mutationFn: signIn,
    mutationKey: [MUTATION_KEY.SIGN_IN],
  });
};

export const useMe = ({ enabled }: { enabled?: boolean }) => {
  return useQuery({
    queryFn: getProfile,
    queryKey: [QUERY_KEY.ME, enabled],
    enabled: enabled,
    refetchOnWindowFocus: false,
  });
};
