import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { BlogJsonLd, NextSeo } from 'next-seo'
import { ReactNode, VFC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Share } from '@components/common/Share'
import { BlockCode } from '@components/markdown/BlockCode'
import { Blockquote } from '@components/markdown/Blockquote'
import { Delete } from '@components/markdown/Delete'
import { Heading } from '@components/markdown/Heading'
import { Img } from '@components/markdown/Img'
import { InlineCode } from '@components/markdown/InlineCode'
import { Link } from '@components/markdown/Link'
import { List } from '@components/markdown/List'
import { ListItem } from '@components/markdown/ListItem'
import { Paragraph } from '@components/markdown/Paragraph'
import { Strong } from '@components/markdown/Strong'
import { ThematicBreak } from '@components/markdown/ThematicBreak'
import { getAllPostIds, getPostData } from '@lib/posts'
import styles from '@styles/Blog.module.scss'

type Props = {
	readonly postData: {
		data: {
			title: string
			preface: string
			date: string
			updatedAt?: string
			image: string
		}
		id: string
		content: string
	}
}

type Code = {
	readonly language: string
	readonly value: string
}

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const Blog: NextPage<Props> = ({ postData }) => {
	const CodeBlock = ({ language, value }: Code) => {
		return <BlockCode language={language} value={value} />
	}

	const MarkdownBlockquote: VFC<{ children: ReactNode }> = ({ children }) => {
		return <Blockquote>{children}</Blockquote>
	}

	const MarkdownDelete: VFC<{ children: ReactNode; href: string }> = ({ children }) => {
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

	const MarkdownLink: VFC<{ children: ReactNode; href: string }> = ({ children, ...props }) => {
		const { href } = props

		return <Link href={href}>{children}</Link>
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

	const MarkdownParagraph: VFC<{ children: ReactNode }> = ({ children }) => {
		return <Paragraph>{children}</Paragraph>
	}

	const MarkdownStrong: VFC<{ children: ReactNode }> = ({ children }) => {
		return <Strong>{children}</Strong>
	}

	const MarkdownThematicBreak = () => {
		return <ThematicBreak />
	}

	const CLOUDINARY_URL = `https://res.cloudinary.com/https-yutaaaaa-vercel-app/image/upload/l_text:TakaoGothic_50:${postData.data.title},co_rgb:000000,w_720,c_fit/v1640180870/cloudinary_fzk9qg.png`

	return (
		<div className={styles.container}>
			<NextSeo
				title={postData.data.title}
				description={postData.data.preface}
				openGraph={{
					type: 'website',
					title: postData.data.title,
					description: postData.data.preface,
					url: `https://yutaaaaa.dev/${postData.id}`,
					site_name: postData.data.title,
					images: [
						{
							url: CLOUDINARY_URL,
							width: 800,
							height: 420,
							alt: 'Og Image Alt',
						},
					],
				}}
				twitter={{
					handle: '@yutaaaaa___',
					site: '@yutaaaaa___',
					cardType: 'summary_large_image',
				}}
			/>
			<BlogJsonLd
				url={`https://yutaaaaa.dev/${postData.id}`}
				title={postData.data.title}
				images={[CLOUDINARY_URL]}
				datePublished={`${postData.data.date}T09:00:00+08:00`}
				dateModified={`${postData.data.updatedAt}T09:00:00+08:00`}
				authorName="yutaaaaa"
				description={postData.data.preface}
			/>
			<div className={styles.dateBox}>
				<div className={styles.createdAt}>
					<small className={styles.date}>{postData.data.date}</small>
				</div>
				{postData.data.updatedAt && (
					<div className={styles.updatedAt}>
						<small className={styles.date}>{postData.data.updatedAt}</small>
					</div>
				)}
			</div>
			<h1 className={styles.title}>{postData.data.title}</h1>
			<main className={styles.main}>
				<ReactMarkdown
					skipHtml={false}
					unwrapDisallowed={true}
					remarkPlugins={[remarkGfm]}
					components={{
						blockquote: MarkdownBlockquote,
						code({ inline, className, children, ...props }) {
							const match = /language-(\w+)/.exec(className || '')

							return !inline && match ? (
								<CodeBlock language={match[1]} value={children.toString()} {...props} />
							) : (
								<MarkdownInlineCode>{children}</MarkdownInlineCode>
							)
						},
						del: MarkdownDelete,
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
						a: MarkdownLink,
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
						p: MarkdownParagraph,
						strong: MarkdownStrong,
						hr: MarkdownThematicBreak,
					}}
				>
					{postData.content}
				</ReactMarkdown>
			</main>
			<Share slug={postData.id} title={postData.data.title} />
		</div>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const postData = await getPostData(params.id as string)

	return {
		props: {
			postData,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds()

	return {
		paths,
		fallback: false,
	}
}

export default Blog
