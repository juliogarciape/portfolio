const projects: Project[] = [
	{
		name: 'Project 1',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-3 row-span-2',
	},
	{
		name: 'Project 2',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-4',
	},
	{
		name: 'Project 3',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-5',
	},
	{
		name: 'Project 4',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-5',
	},
	{
		name: 'Project 5',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-4',
	},
	{
		name: 'Project 6',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-5',
	},
	{
		name: 'Project 7',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-4',
	},
	{
		name: 'Project 8',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-3',
	},
	{
		name: 'Project 9',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-3',
	},
	{
		name: 'Project 10',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-5',
	},
	{
		name: 'Project 11',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-4 row-span-2',
	},
	{
		name: 'Project 12',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-5',
	},
	{
		name: 'Project 13',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-3',
	},
	{
		name: 'Project 14',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-3',
	},
	{
		name: 'Project 15',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-4',
	},
	{
		name: 'Project 16',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-5',
	},
	{
		name: 'Project 17',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-5',
	},
	{
		name: 'Project 18',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-4',
	},
	{
		name: 'Project 19',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-3',
	},
	{
		name: 'Project 20',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-3 row-span-2',
	},
	{
		name: 'Project 21',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-6',
	},
	{
		name: 'Project 22',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-3',
	},
	{
		name: 'Project 23',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-4',
	},
	{
		name: 'Project 24',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-5',
	},
	{
		name: 'Project 25',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-4',
	},
	{
		name: 'Project 26',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-4',
	},
	{
		name: 'Project 27',
		url: '',
		image: '/screenshots/kickdl.png',
		sourceCode: 'https://github.com/juliogarciape/',
		size: 'col-span-4',
	},
]

export default function BentoProjects() {
	return (
		<div>
			<h3 className="text-4xl text-white">- Proyectos -</h3>

			<div className="w-full -skew-y-3 grid grid-cols-12 gap-2 grid-rows-[repeat(10,240px)]">
				{projects.map((project, index) => (
					<div
						key={index}
						className={`group/project flex flex-col items-center justify-center ${project.size} gap-5 bg-red-600`}
					>
						<div className="invisible flex gap-4 text-xl text-white group-hover/project:visible">
							<a href={project.url} target="_blank">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										stroke="none"
										d="M0 0h24v24H0z"
										fill="none"
									/>
									<path d="M9 15l6 -6" />
									<path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
									<path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
								</svg>
							</a>

							{project.name}

							<a href={project.sourceCode} target="_blank">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className=""
								>
									<path
										stroke="none"
										d="M0 0h24v24H0z"
										fill="none"
									/>
									<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
								</svg>
							</a>
						</div>

						<img
							src={project.image}
							width="60%"
							height="20"
							alt="Image"
						/>
					</div>
				))}
			</div>
		</div>
	)
}
