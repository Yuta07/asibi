import { ReactNode, FC } from 'react'

type Props = {
	children: ReactNode
	ordered: boolean
	depth: number
}

export const List: FC<Props> = ({ children, ordered, depth }) => {
	return ordered ? (
		<>
			<ol style={{ margin: depth > 0 ? `10px 0 0` : `15px 0` }} className="ordered" data-testid="markdown-ordered-list">
				{children}
			</ol>
			<style jsx>{`
				.ordered {
					padding: 0 20px 0 0;
					list-style: none;
					counter-reset: order;
				}
			`}</style>
		</>
	) : (
		<>
			<ul
				style={{ margin: depth > 0 ? `10px 0 0` : `15px 0` }}
				className="unOrdered"
				data-testid="markdown-unOrdered-list"
			>
				{children}
			</ul>
			<style jsx>{`
				.unOrdered {
					padding: 0 20px;
				}
			`}</style>
		</>
	)
}
