'use client'

type Props = { error: Error; reset: () => void }

export default function GlobalError({ error, reset }: Props) {
	console.log(error)
	return (
		<html>
			<head></head>
			<body>
				<h2>Something went wrong!</h2>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	)
}
