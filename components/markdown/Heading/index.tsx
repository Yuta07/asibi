import classnames from 'classnames'
import { createElement, ReactNode, FC } from 'react'

import styles from './Heading.module.scss'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode
	headingLevel: HeadingLevel
}

export const Heading: FC<Props> = ({ children, headingLevel }) => {
	const Tag = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) =>
		createElement(headingLevel, props, children)

	return (
		<Tag className={classnames(styles.heading, styles[headingLevel])} data-testid={`markdown-heading-${headingLevel}`}>
			{children}
		</Tag>
	)
}
