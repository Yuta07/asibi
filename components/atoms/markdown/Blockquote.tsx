import { FC } from 'react'

export const Blockquote: FC = ({ children }) => {
	return (
		<blockquote>
			{children}
			<style jsx>{`
				blockquote {
					padding: 0.4rem 0 0.4rem 1rem;
					margin: 1rem 0;
					border-radius: 0 8px 8px 0;
					position: relative;
				}

				blockquote:before {
					position: absolute;
					top: 0px;
					left: 0px;
					content: '';
					display: inline-block;
					width: 4px;
					height: calc(100% - 15px);
					border-radius: 6px;
					background: rgba(121, 127, 142, 0.6);
				}
			`}</style>
		</blockquote>
	)
}
