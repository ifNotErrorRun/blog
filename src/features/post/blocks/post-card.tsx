import { cn } from '@/shared/libs/shadcn/utils';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/components/ui/card';
import type { Post } from '../schemas/post';
import { format } from 'date-fns';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	post: Post;
}

export function PostCard({ post, className, ...props }: CardProps) {
	return (
		<Card
			className={cn(
				'lg:min-w-[750px] md:min-w-[650px] sm:min-w-full h-40',
				className,
			)}
			{...props}
		>
			<CardHeader>
				<CardTitle className='text-xl'>{post.frontmatter.title}</CardTitle>
				<CardDescription>
					{format(post.created_at, 'yyyy-MM-dd')}
				</CardDescription>
			</CardHeader>
			<CardContent className='grid gap-2'>
				<p className='text-sm text-muted-foreground'>{post.body}</p>
			</CardContent>
		</Card>
	);
}
