import { FC } from 'react'

export const Paragraph: FC = ({ children }) => {
	return (
		<p>
			{children}
			<style jsx>{`
				p {
					margin-bottom: 15px;
				}
			`}</style>
		</p>
	)
}
