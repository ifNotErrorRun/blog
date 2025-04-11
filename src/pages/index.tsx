import usePosts from "@/features/posts/queries/use-posts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RootPage,
});

function RootPage() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
      <div>
        <h3>Posts</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <div>
                <h4>{post.frontmatter.title}</h4>
                <p>{post.body}</p>
                <p>{post.created_at}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
