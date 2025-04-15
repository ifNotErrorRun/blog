import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { ThemeProvider } from './provider/theme-provider';
import { queryClient } from '@/shared/libs/react-query/query-client';
import { routeTree } from '@/shared/libs/router/routeTree.gen.ts';
import '@/shared/styles/global.css';

const router = createRouter({
	routeTree,
	context: {
		queryClient,
	},
	defaultPreload: 'intent',
	// Since we're using React Query, we don't want loader calls to ever be stale
	// This will ensure that the loader is always called when the route is preloaded or visited
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
createRoot(rootElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<NuqsAdapter>
				<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
					<RouterProvider router={router} />
				</ThemeProvider>
			</NuqsAdapter>
		</QueryClientProvider>
	</StrictMode>,
);
