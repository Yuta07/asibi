import { ReactNode, VFC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { BlockCode } from '@components/markdown/BlockCode'
import { Blockquote } from '@components/markdown/Blockquote'
import { Delete } from '@components/markdown/Delete'
import { Heading } from '@components/markdown/Heading'
import { Img } from '@components/markdown/Img'
import { InlineCode } from '@components/markdown/InlineCode'
import { Link } from '@components/markdown/Link'
import { List } from '@components/markdown/List'
import { ListItem } from '@components/markdown/ListItem'
import { ElParagraph, Paragraph } from '@components/markdown/Paragraph'
import { Strong } from '@components/markdown/Strong'
import { ThematicBreak } from '@components/markdown/ThematicBreak'

import styles from './PostBody.module.scss'

type Props = {
	readonly post: {
		title: string
		preface: string
		createdAt: string
		updatedAt: string
		category: string
		tags: string[]
		slug: string
		content: string
	}
}

type Code = {
	readonly language: string
	readonly value: string
}

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export const PostBody = ({ post }: Props) => {
	const CodeBlock = ({ language, value }: Code) => {
		return <BlockCode language={language} value={value} />
	}

	const MarkdownBlockquote: VFC<{ children: ReactNode }> = ({ children }) => {
		return <Blockquote>{children}</Blockquote>
	}

	const MarkdownDelete: VFC<{ children: ReactNode }> = ({ children }) => {
		return <Delete>{children}</Delete>
	}

	const MarkdownHeading: VFC<{ children: ReactNode; level: number }> = ({ children, ...props }) => {
		const { level } = props
		const headingLevel = `h${level}` as HeadingLevel

		return <Heading headingLevel={headingLevel}>{children}</Heading>
	}

	const MarkdownImage = ({ ...props }) => {
		const { alt, src } = props

		return <Img alt={alt} src={src} />
	}

	const MarkdownInlineCode: VFC<{ children: ReactNode }> = ({ children }) => {
		return <InlineCode>{children}</InlineCode>
	}

	const MarkdownLink: VFC<{ children: ReactNode; href?: string }> = ({ children, ...props }) => {
		const { href } = props

		return <Link href={href || ''}>{children}</Link>
	}

	const MarkdownList: VFC<{ children: ReactNode; ordered: boolean; depth: number }> = ({ children, ...props }) => {
		const { ordered, depth } = props
		return (
			<List ordered={ordered} depth={depth}>
				{children}
			</List>
		)
	}

	const MarkdownListItem: VFC<{ children: ReactNode; ordered: boolean; index: number }> = ({ children, ...props }) => {
		const { ordered, index } = props
		return (
			<ListItem ordered={ordered} index={index}>
				{children}
			</ListItem>
		)
	}

	const MarkdownElementParagraph: VFC<{ children: ReactNode }> = ({ children }) => {
		return <ElParagraph>{children}</ElParagraph>
	}

	const MarkdownParagraph: VFC<{ children: ReactNode }> = ({ children }) => {
		return <Paragraph>{children}</Paragraph>
	}

	const MarkdownStrong: VFC<{ children: ReactNode }> = ({ children }) => {
		return <Strong>{children}</Strong>
	}

	const MarkdownThematicBreak = () => {
		return <ThematicBreak />
	}

	console.log(post.content.toString().length)

	return (
		<div>
			<p className={styles.preface}>{post.preface}</p>
			<div className={styles.content}>
				<ReactMarkdown
					skipHtml={false}
					unwrapDisallowed={true}
					remarkPlugins={[remarkGfm]}
					components={{
						blockquote({ children, ...props }) {
							return <MarkdownBlockquote {...props}>{children}</MarkdownBlockquote>
						},
						code({ inline, className, children, ...props }) {
							const match = /language-(\w+)/.exec(className || '')

							return !inline && match ? (
								<CodeBlock language={match[1]} value={children.toString()} {...props} />
							) : (
								<MarkdownInlineCode>{children}</MarkdownInlineCode>
							)
						},
						del({ children, ...props }) {
							return <MarkdownDelete {...props}>{children}</MarkdownDelete>
						},
						h1({ children, level, ...props }) {
							return (
								<MarkdownHeading level={level} {...props}>
									{children}
								</MarkdownHeading>
							)
						},
						h2({ children, level, ...props }) {
							return (
								<MarkdownHeading level={level} {...props}>
									{children}
								</MarkdownHeading>
							)
						},
						h3({ children, level, ...props }) {
							return (
								<MarkdownHeading level={level} {...props}>
									{children}
								</MarkdownHeading>
							)
						},
						h4({ children, level, ...props }) {
							return (
								<MarkdownHeading level={level} {...props}>
									{children}
								</MarkdownHeading>
							)
						},
						h5({ children, level, ...props }) {
							return (
								<MarkdownHeading level={level} {...props}>
									{children}
								</MarkdownHeading>
							)
						},
						h6({ children, level, ...props }) {
							return (
								<MarkdownHeading level={level} {...props}>
									{children}
								</MarkdownHeading>
							)
						},
						img: MarkdownImage,
						a({ children, href, ...props }) {
							return (
								<MarkdownLink href={href} {...props}>
									{children}
								</MarkdownLink>
							)
						},
						li({ children, index, ordered, ...props }) {
							return (
								<MarkdownListItem ordered={ordered} index={index} {...props}>
									{children}
								</MarkdownListItem>
							)
						},
						ul({ children, depth, ordered, ...props }) {
							return (
								<MarkdownList depth={depth} ordered={ordered} {...props}>
									{children}
								</MarkdownList>
							)
						},
						ol({ children, depth, ordered, ...props }) {
							return (
								<MarkdownList depth={depth} ordered={ordered} {...props}>
									{children}
								</MarkdownList>
							)
						},
						p({ children, ...props }) {
							const detectTagName = ['img', 'a']

							if (props.node.children[0].type === 'element' && detectTagName.includes(props.node.children[0].tagName)) {
								return <MarkdownElementParagraph {...props}>{children}</MarkdownElementParagraph>
							} else {
								return <MarkdownParagraph {...props}>{children}</MarkdownParagraph>
							}
						},
						strong({ children, ...props }) {
							return <MarkdownStrong {...props}>{children}</MarkdownStrong>
						},
						hr: MarkdownThematicBreak,
					}}
				>
					{post.content}
				</ReactMarkdown>
			</div>
		</div>
	)
}
