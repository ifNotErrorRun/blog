import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/(public)/articles')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className='flex flex-col items-center justify-center gap-y-3 mx-6'>
			<h3 className='text-2xl font-bold'>Articles</h3>
			<Outlet />
		</div>
	);
}
