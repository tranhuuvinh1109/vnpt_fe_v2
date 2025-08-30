import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "../../enum";
import { getAllMember } from "./member.api";

export const useGetAllMember = () => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_ALL_MEMBER],
    queryFn: getAllMember,
    refetchOnWindowFocus: false,
  });
};
