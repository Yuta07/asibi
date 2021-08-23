import { FC } from 'react'

type Props = {
	href: string
}

export const Link: FC<Props> = ({ href, children }) => {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			{children}
			<style jsx>{`
				a {
					font-size: 16px;
					text-decoration: underline;
					cursor: pointer;
				}

				a:hover {
					color: #3fb0ac;
					text-decoration: none;
					background-color: transparent;
				}
			`}</style>
		</a>
	)
}
