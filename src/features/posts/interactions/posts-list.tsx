import usePosts from '../queries/use-posts';

const PostsList = () => {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;
  if (!posts || posts.length === 0) return <div>게시물이 없습니다</div>;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-4 border rounded lg:max-w-2xl lg:mx-auto">
          <h2 className="text-xl font-bold">{post.frontmatter.title}</h2>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
          <p className="text-sm text-gray-500">
            {new Date(post.updated_at).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
