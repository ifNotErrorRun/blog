import api from "@/shared/libs/axios/api";
import { useQuery } from "@tanstack/react-query";
import type { Post } from "../schemas/post";

const usePosts = () => {
  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () => api.get("/posts").then((res) => res.data),
  });

  return {
    posts,
    isLoading,
    error,
  };
};

export default usePosts;
