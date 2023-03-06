import '@/styles/root.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja-JP">
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/icon/icon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;900&display=swap"
					rel="preload"
					media="all"
				/>
			</head>
			<body>{children}</body>
		</html>
	)
}
