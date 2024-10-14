import Nav from '@/components/Nav'
import About from '@/components/About'
import { Montserrat } from 'next/font/google'

const titleFont = Montserrat({
	weight: ['200'],
	subsets: ['latin'],
})

export default function MainContent() {
	return (
		<div className="border-red-500 border-4 max-w-screen-lg m-auto">
			<div className="text-center flex flex-col gap-4">
				<h3
					className={`text-slate-200 text-6xl ${titleFont.className}`}
				>
					Julio Cesar Garcia
				</h3>
				<h2 className={`text-4xl text-white ${titleFont.className}`}>
					- Web Software Developer -
				</h2>
			</div>
			<About />
			<Nav />
		</div>
	)
}
