import { createFileRoute } from '@tanstack/react-router';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const Route = createFileRoute('/(auth)/articles/new')({
	component: RouteComponent,
});

function RouteComponent() {
	const editor = useEditor({
		extensions: [StarterKit],
		content: '<p>Hello World!</p>',
	});

	return (
		<>
			<div className='flex flex-col items-center justify-center gap-y-3 mx-6'>
				<h3 className='text-2xl font-bold'>New Article</h3>
				<p className='text-sm text-gray-500'>Create a new article</p>
				<div className='card'>
					<EditorContent editor={editor} />
				</div>
			</div>
		</>
	);
}
