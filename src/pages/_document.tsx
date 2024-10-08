import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="es">
			<Head />
			<body className="antialiased bg-slate-800 text-slate-400 selection:bg-sky-300 selection:text-sky-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
