import { PostSkeleton } from '@/features/post/blocks/post-skeleton';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Button } from '@/shared/components/ui/button';

export const Route = createFileRoute('/articles/')({
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
