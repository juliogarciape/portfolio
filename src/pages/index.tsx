import Head from 'next/head'
import MainContent from '@/components/MainContent'
import BentoProjects from '@/components/BentoProjects'

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Julio Cesar Garcia | Web Software Developer
					&#x1F1F5;&#x1F1EA; &#x1F468;&#x200D;&#x1F4BB;
				</title>
			</Head>
			<MainContent />
			<BentoProjects />
		</>
	)
}
