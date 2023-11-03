import { createElement, ReactNode, FC } from 'react'

import styles from './styles.module.css'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode
	headingLevel: HeadingLevel
}

const HeadingClassName = {
	h1: 'first',
	h2: 'second',
	h3: 'third',
	h4: 'fourth',
	h5: 'fifth',
}

export const Heading: FC<Props> = ({ children, headingLevel }) => {
	const Tag = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) =>
		createElement(headingLevel, props, children)

	return (
		<Tag
			className={`${styles.heading} ${styles[HeadingClassName[headingLevel]]}`}
			data-testid={`markdown-heading-${headingLevel}`}
		>
			{children}
		</Tag>
	)
}
