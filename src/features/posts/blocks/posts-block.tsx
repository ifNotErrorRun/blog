import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/libs/react-query/queryClient';
import PostsList from '../interactions/posts-list';

const PostsBlock = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsList />
    </QueryClientProvider>
  );
};

export default PostsBlock;
