import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import GNB from '@/widgets/gnb/gnb';

export const Route = createRootRoute({
	component: () => (
		<div className='w-screen h-screen py-3'>
			<div className='container mx-auto flex flex-col items-center justify-center'>
				<GNB />
				<div className='w-full p-3'>
					<Outlet />
				</div>
				<TanStackRouterDevtools />
			</div>
		</div>
	),
});
