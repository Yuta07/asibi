'use client'

import { ReactNode, FC } from 'react'

type Props = {
	children: ReactNode
	ordered: boolean
	depth: number
}

export const List: FC<Props> = ({ children, ordered, depth }) => {
	return ordered ? (
		<>
			<ol className="ordered" data-testid="markdown-ordered-list" style={{ margin: depth > 0 ? `10px 0 0` : `15px 0` }}>
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
				className="unOrdered"
				data-testid="markdown-unOrdered-list"
				style={{ margin: depth > 0 ? `10px 0 0` : `15px 0` }}
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
