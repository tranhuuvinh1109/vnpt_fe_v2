"use client";

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import toast from "react-hot-toast";
import { useAppContext } from "../context";

interface Props {
  children: ReactNode;
}

export const ReactQueryProvider = ({ children }: Props) => {
  const { setIsOpenLoginModal } = useAppContext();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    queryCache: new QueryCache({
      onError: (error: any) => {
        if (error?.response?.status === 401) {
          setIsOpenLoginModal(true);
          toast.error("Vui lòng đăng nhập !");
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error: any) => {
        if (error?.response?.status === 401) {
          setIsOpenLoginModal(true);
          toast.error("Vui lòng đăng nhập !");
        }
      },
    }),
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
