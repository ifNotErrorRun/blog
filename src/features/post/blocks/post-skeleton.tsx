import { Skeleton } from '@/shared/components/ui/skeleton';

export function PostSkeleton() {
	const classes =
		'lg:min-w-[750px] md:min-w-[650px] sm:min-w-full h-40 rounded-xl shadow-sm';

	return (
		<>
			<Skeleton className={classes} />
			<Skeleton className={classes} />
			<Skeleton className={classes} />
			<Skeleton className={classes} />
			<Skeleton className={classes} />
		</>
	);
}
