import { PostSkeleton } from '@/features/post/ui/post-skeleton';
import { createFileRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';

export const Route = createFileRoute('/(public)/articles/')({
	component: RouteComponent,
});

function RouteComponent() {
	const PostList = lazy(() => import('@/features/post/blocks/post-list'));

	return (
		<Suspense fallback={<PostSkeleton />}>
			<PostList />
		</Suspense>
	);
}
