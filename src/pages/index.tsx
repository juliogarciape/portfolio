import Head from 'next/head'
import Nav from '@/components/Nav'
import About from '@/components/About'
import { Montserrat } from 'next/font/google'

const titleFont = Montserrat({
	weight: ['200'],
	subsets: ['latin'],
})

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Julio Cesar Garcia | Software Developer &#x1F1F5;&#x1F1EA;
					&#x1F468;&#x200D;&#x1F4BB;
				</title>
			</Head>
			<main className="min-h-screen border-red-500 border-4 max-w-screen-lg m-auto">
				<div className="text-center flex flex-col gap-4">
					<h3
						className={`text-slate-200 text-6xl ${titleFont.className}`}
					>
						Julio Cesar Garcia
					</h3>
					<h3
						className={`text-4xl text-white ${titleFont.className}`}
					>
						- Software Developer -
					</h3>
				</div>
				<About />
				<Nav />
			</main>
		</>
	)
}
