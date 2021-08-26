import { createElement, ReactNode, VFC } from 'react'
import classnames from 'classnames'
import styles from './Heading.module.scss'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode
	headingLevel: HeadingLevel
}

export const Heading: VFC<Props> = ({ children, headingLevel }) => {
	const Tag = ({ ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) =>
		createElement(headingLevel, props, children)

	return <Tag className={classnames(styles.heading, styles[headingLevel])}>{children}</Tag>
}
