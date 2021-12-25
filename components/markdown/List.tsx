import { ReactNode, VFC } from 'react'

type Props = {
	children: ReactNode
	ordered: boolean
	depth: number
}

export const List: VFC<Props> = ({ children, ordered, depth }) => {
	return ordered ? (
		<ol style={{ margin: depth > 0 ? `10px 0 0` : `15px 0` }} className="ordered">
			{children}
			<style jsx>{`
				.ordered {
					padding: 0 20px 0 0;
					list-style: none;
					counter-reset: order;
				}
			`}</style>
		</ol>
	) : (
		<ul style={{ margin: depth > 0 ? `10px 0 0` : `15px 0` }} className="unOrdered">
			{children}
			<style jsx>{`
				.unOrdered {
					padding: 0 20px;
				}
			`}</style>
		</ul>
	)
}
