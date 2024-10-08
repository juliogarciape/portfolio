import { links } from '@/data/config'

export default function Nav() {
	return (
		<div className="flex gap-14 *:text-xl">
			{links.map((link, index) => (
				<a
					key={index}
					href={link.url}
					className="hover:text-white"
					target="_blank"
				>
					{link.name}
				</a>
			))}
		</div>
	)
}
