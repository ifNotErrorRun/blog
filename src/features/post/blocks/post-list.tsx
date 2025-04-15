import { PostCard } from '@/features/post/ui/post-card';
import usePosts from '@/features/post/queries/use-posts';

export default function PostList() {
	const { posts } = usePosts();
	return (
		<>
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</>
	);
}
