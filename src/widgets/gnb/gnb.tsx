import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/shared/components/ui/navigation-menu';
import { Link } from '@tanstack/react-router';
import GithubLink from '@/shared/assets/icons/github-mark.svg';

export default function GNB() {
	return (
		<>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<Link to='/'>Home</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<Link to='/articles'>Articles</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<Link to='/contact'>Contact</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<Link to='/about'>About</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<a
								href='https://github.com/ifNotErrorRun'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									src={GithubLink}
									alt='github profile'
									width={20}
									height={20}
								/>
							</a>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
				{/* <ModeToggle /> */}
			</NavigationMenu>
		</>
	);
}
