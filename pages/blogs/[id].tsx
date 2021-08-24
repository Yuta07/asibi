import { ReactNode, VFC } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { BlogJsonLd, NextSeo } from 'next-seo'
import ReactMarkdown from 'react-markdown/with-html'
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
			quickword: string
			date: string
			updated?: string
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
		return <Heading level={level}>{children}</Heading>
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

	const MarkdownList: VFC<{ children: ReactNode; ordered: boolean; tight: boolean; depth: number }> = ({
		children,
		...props
	}) => {
		const { ordered, tight, depth } = props
		return (
			<List ordered={ordered} tight={tight} depth={depth}>
				{children}
			</List>
		)
	}

	const MarkdownListItem: VFC<{ children: ReactNode; ordered: boolean; tight: boolean; index: number }> = ({
		children,
		...props
	}) => {
		const { ordered, tight, index } = props
		return (
			<ListItem ordered={ordered} tight={tight} index={index}>
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

	return (
		<div className={styles.container}>
			<NextSeo
				title={postData.data.title}
				description={postData.data.quickword}
				openGraph={{
					type: 'article',
					title: postData.data.title,
					description: postData.data.quickword,
					url: `https://yutaaaaa.vercel.app/blogs/${postData.id}`,
				}}
			/>
			<BlogJsonLd
				url={`https://yutaaaaa.vercel.app/blogs/${postData.id}`}
				title={postData.data.title}
				images={['https://yutaaaaa.vercel.app/ogp.jpg']}
				datePublished={`${postData.data.date}2015-02-05T09:00:00+08:00`}
				dateModified={`${postData.data.updated}2015-02-05T09:00:00+08:00`}
				authorName="yutaaaaa"
				description={postData.data.quickword}
			/>
			<div className={styles.dateBox}>
				<div className={styles.createdAt}>
					<Image quality={85} src="/images/created.svg" alt="created_icon" width={16} height={16} />
					<small className={styles.date}>{postData.data.date}</small>
				</div>
				{postData.data.updated && (
					<div className={styles.updatedAt}>
						<Image quality={85} src="/images/updated.svg" alt="updated_icon" width={16} height={16} />
						<small className={styles.date}>{postData.data.updated}</small>
					</div>
				)}
			</div>
			<h2 className={styles.title}>{postData.data.title}</h2>
			<ReactMarkdown
				escapeHtml={false}
				source={postData.content}
				disallowedTypes={['paragraph']}
				unwrapDisallowed={true}
				renderers={{
					blockquote: MarkdownBlockquote,
					code: CodeBlock,
					delete: MarkdownDelete,
					heading: MarkdownHeading,
					image: MarkdownImage,
					inlineCode: MarkdownInlineCode,
					link: MarkdownLink,
					list: MarkdownList,
					listItem: MarkdownListItem,
					paragraph: MarkdownParagraph,
					strong: MarkdownStrong,
					thematicBreak: MarkdownThematicBreak,
				}}
			/>
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
