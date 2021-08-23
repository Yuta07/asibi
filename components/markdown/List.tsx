import { FC } from 'react'

type Props = {
	ordered: boolean
	tight: boolean
	depth: number
}

export const List: FC<Props> = ({ ordered, tight, depth, children }) => {
	return tight && ordered ? (
		<ol style={{ margin: depth > 0 ? `10px 0 0` : `15px 0` }}>
			{children}
			<style jsx>{`
				ol {
					padding: 0 20px 0 0;
					list-style: none;
				}
			`}</style>
		</ol>
	) : (
		<ul style={{ margin: depth > 0 ? `10px 0 0` : `15px 0` }}>
			{children}
			<style jsx>{`
				ul {
					padding: 0 20px;
				}
			`}</style>
		</ul>
	)
}
