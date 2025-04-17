import { createFileRoute } from '@tanstack/react-router';
import { SimpleEditor } from '@/shared/components/tiptap-ui/tiptap-templates/simple/simple-editor';
import { useState } from 'react';

export const Route = createFileRoute('/(auth)/articles/new')({
	component: RouteComponent,
});

function RouteComponent() {
	const [content, setContent] = useState({});

	const handleSave = (newContent: any) => {
		setContent(newContent);
	};

	return (
		<>
			<div className='flex flex-col items-center justify-center gap-y-3 mx-6'>
				<h3 className='text-2xl font-bold'>New Article</h3>
				<p className='text-sm text-gray-500'>Create a new article</p>
				<div className='card'>
					<SimpleEditor content={content} onSave={handleSave} />
				</div>
			</div>
		</>
	);
}
