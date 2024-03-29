import { ReactNode, FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { BlockCode } from '@/components/markdown/BlockCode'
import { Blockquote } from '@/components/markdown/Blockquote'
import { Delete } from '@/components/markdown/Delete'
import { EmbedTweetURL } from '@/components/markdown/EmbedTweetURL'
import { Heading } from '@/components/markdown/Heading'
import { Img } from '@/components/markdown/Img'
import { InlineCode } from '@/components/markdown/InlineCode'
import { Link } from '@/components/markdown/Link'
import { List } from '@/components/markdown/List'
import { ListItem } from '@/components/markdown/ListItem'
import { ElParagraph, Paragraph } from '@/components/markdown/Paragraph'
import { Strong } from '@/components/markdown/Strong'
import { ThematicBreak } from '@/components/markdown/ThematicBreak'

import s from './styles.module.css'

import type { Post } from '@/lib/posts'

type Props = { post: Omit<Post, 'preface'> }

type Code = {
	readonly language: string
	readonly value: string
}

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export const PostBody = ({ post }: Props) => {
	const CodeBlock = ({ language, value }: Code) => {
		return <BlockCode language={language} value={value} />
	}

	const MarkdownBlockquote: FC<{ children: ReactNode }> = ({ children }) => {
		return <Blockquote>{children}</Blockquote>
	}

	const MarkdownDelete: FC<{ children: ReactNode }> = ({ children }) => {
		return <Delete>{children}</Delete>
	}

	const MarkdownHeading: FC<{ children: ReactNode; level: number }> = ({ children, ...props }) => {
		const { level } = props
		const headingLevel = `h${level}` as HeadingLevel

		return <Heading headingLevel={headingLevel}>{children}</Heading>
	}

	const MarkdownImage: FC<{ alt: string | undefined; src: string | undefined }> = ({ alt, src, ...props }) => {
		return <Img alt={alt} src={src} {...props} />
	}

	const MarkdownInlineCode: FC<{ children: ReactNode }> = ({ children }) => {
		return <InlineCode>{children}</InlineCode>
	}

	const MarkdownLink: FC<{ children: ReactNode; href?: string }> = ({ children, ...props }) => {
		const { href } = props

		return <Link href={href || ''}>{children}</Link>
	}

	const MarkdownList: FC<{ children: ReactNode; ordered: boolean; depth: number }> = ({ children, ...props }) => {
		const { ordered, depth } = props
		return (
			<List depth={depth} ordered={ordered}>
				{children}
			</List>
		)
	}

	const MarkdownListItem: FC<{ children: ReactNode; ordered: boolean; index: number }> = ({ children, ...props }) => {
		const { ordered, index } = props
		return (
			<ListItem index={index} ordered={ordered}>
				{children}
			</ListItem>
		)
	}

	const MarkdownElementParagraph: FC<{ children: ReactNode }> = ({ children }) => {
		return <ElParagraph>{children}</ElParagraph>
	}

	const MarkdownParagraph: FC<{ children: ReactNode }> = ({ children }) => {
		return <Paragraph>{children}</Paragraph>
	}

	const MarkdownStrong: FC<{ children: ReactNode }> = ({ children }) => {
		return <Strong>{children}</Strong>
	}

	const MarkdownThematicBreak = () => {
		return <ThematicBreak />
	}

	return (
		<article className={s.container}>
			<ReactMarkdown
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
					img({ alt, src, ...props }) {
						return <MarkdownImage alt={alt} src={src} {...props} />
					},
					a({ children, href, ...props }) {
						if (href?.toString().startsWith('https://twitter.com/')) {
							return <EmbedTweetURL href={href} />
						}

						return (
							<MarkdownLink href={href} {...props}>
								{children}
							</MarkdownLink>
						)
					},
					li({ children, index, ordered, ...props }) {
						return (
							<MarkdownListItem index={index} ordered={ordered} {...props}>
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
				remarkPlugins={[remarkGfm]}
				skipHtml={false}
				unwrapDisallowed={true}
			>
				{post.content}
			</ReactMarkdown>
		</article>
	)
}
