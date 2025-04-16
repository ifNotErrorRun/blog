import { createFileRoute } from '@tanstack/react-router';
import Tiptap from '@/features/editor/Tiptap';

export const Route = createFileRoute('/(auth)/articles/new')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className='flex flex-col items-center justify-center gap-y-3 mx-6'>
				<h3 className='text-2xl font-bold'>New Article</h3>
				<p className='text-sm text-gray-500'>Create a new article</p>
				<div className='card'>
					<Tiptap />
				</div>
			</div>
		</>
	);
}
