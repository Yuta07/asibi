import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import ReactMarkdown from 'react-markdown/with-html'
import { Date } from '../../components/atoms/Date'
import { BlockCode } from '../../components/atoms/markdown/BlockCode'
import { Blockquote } from '../../components/atoms/markdown/Blockquote'
import { Delete } from '../../components/atoms/markdown/Delete'
import { Heading } from '../../components/atoms/markdown/Heading'
import { Image } from '../../components/atoms/markdown/Image'
import { InlineCode } from '../../components/atoms/markdown/InlineCode'
import { Link } from '../../components/atoms/markdown/Link'
import { List } from '../../components/atoms/markdown/List'
import { ListItem } from '../../components/atoms/markdown/ListItem'
import { Paragraph } from '../../components/atoms/markdown/Paragraph'
import { Strong } from '../../components/atoms/markdown/Strong'
import { ThematicBreak } from '../../components/atoms/markdown/ThematicBreak'
import { Share } from '../../components/atoms/Share'
import { getAllPostIds, getPostData } from '../../lib/posts'

type Props = {
	readonly postData: {
		data: {
			title: string
			date: string
			updated?: string
			spoiler: string
			quickword: string
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

export const config = { amp: true }

export default function Post({ postData }: Props) {
	const CodeBlock = ({ language, value }: Code) => {
		return <BlockCode language={language} value={value} />
	}

	const MarkdownBlockquote: FC = ({ children }) => {
		return <Blockquote>{children}</Blockquote>
	}

	const MarkdownDelete: FC<{ href: string }> = ({ children }) => {
		return <Delete>{children}</Delete>
	}

	const MarkdownHeading: FC<{ level: number }> = ({ children, ...props }) => {
		const { level } = props
		return <Heading level={level}>{children}</Heading>
	}

	const MarkdownImage = ({ ...props }) => {
		const { alt, src } = props
		return <Image alt={alt} src={src} />
	}

	const MarkdownInlineCode: FC = ({ children }) => {
		return <InlineCode>{children}</InlineCode>
	}

	const MarkdownLink: FC<{ href: string }> = ({ children, ...props }) => {
		const { href } = props
		return <Link href={href}>{children}</Link>
	}

	const MarkdownList: FC<{ ordered: boolean; tight: boolean; depth: number }> = ({ children, ...props }) => {
		const { ordered, tight, depth } = props
		return (
			<List ordered={ordered} tight={tight} depth={depth}>
				{children}
			</List>
		)
	}

	const MarkdownListItem: FC<{ ordered: boolean; tight: boolean; index: number }> = ({ children, ...props }) => {
		const { ordered, tight, index } = props
		return (
			<ListItem ordered={ordered} tight={tight} index={index}>
				{children}
			</ListItem>
		)
	}

	const MarkdownParagraph: FC = ({ children }) => {
		return <Paragraph>{children}</Paragraph>
	}

	const MarkdownStrong: FC = ({ children }) => {
		return <Strong>{children}</Strong>
	}

	const MarkdownThematicBreak = () => {
		return <ThematicBreak />
	}

	const SEO = {
		title: `${postData.data.title} | Yutaka Miyazaki`,
		description: `${postData.data.spoiler}`,
		openGraph: {
			type: 'article',
			url: `https://yutazon.me/blog/${postData.id}`,
			site_name: 'Yutaka Miyazaki 🤔',
			title: `${postData.data.title}`,
			description: `${postData.data.spoiler}`,
			images: [
				{
					url: 'https://yutazon.me/ogp.jpg',
					width: 800,
					height: 600,
					alt: 'Og Image Alt',
				},
			],
		},
		twitter: {
			handle: 'Yuta07',
			site: '@yutazon7',
			cardType: 'summary',
		},
	}

	return (
		<>
			<NextSeo {...SEO} />
			<article className="blog-article">
				<div className="blog-header-image">
					<amp-img
						src={postData.data.image}
						fallback=""
						width="760"
						height="120"
						layout="intrinsic"
						alt="blog-main-image"
					></amp-img>
				</div>
				<div className="blog-wrapper">
					<header className="blog-header">
						<h1 className="blog-header-title">{postData.data.title}</h1>
						<div className="blog-header-date">
							<amp-img
								src="/blog/calendar.svg"
								fallback=""
								width="16"
								height="16"
								layout="intrinsic"
								alt="blog-created-img"
							></amp-img>
							<Date dateString={postData.data.date} />
							{postData.data.updated && (
								<>
									<div className="blog-header-date-margin" />
									<amp-img
										src="/blog/refresh-cw.svg"
										fallback=""
										width="16"
										height="16"
										layout="intrinsic"
										alt="blog-created-img"
									></amp-img>
									<Date dateString={postData.data.updated} />
								</>
							)}
						</div>
						{postData.data.quickword && <p className="blog-header-quick-word">{postData.data.quickword}</p>}
					</header>
					<main className="blog-main-content">
						<ReactMarkdown
							escapeHtml={false}
							source={postData.content}
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
						<div className="share-content">
							<Share />
						</div>
					</main>
				</div>
				<style jsx>{`
					.blog-article {
						width: 100%;
						color: #353b48;
						border-radius: 30px;
						box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5),
							inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #ffffff;
						background: linear-gradient(
							315deg,
							rgba(239, 239, 239, 0.1) 0%,
							rgba(239, 239, 239, 0.1) 55%,
							rgba(239, 239, 239, 0.25) 100%
						);
					}

					.blog-wrapper {
						padding: 30px;
					}

					.blog-header {
						width: 100%;
					}

					.blog-header-image {
						width: 100%;
						height: 280px;
						display: flex;
						align-items: center;
						justify-content: center;
						background: #282c35;
						border-radius: 30px 30px 0 0;
					}

					.blog-header-title {
						font-size: 24px;
					}

					.blog-header-date {
						display: flex;
						align-items: center;
						margin-top: 10px;
					}

					.blog-header-date amp-img {
						width: 16px;
						height: 16px;
						margin-right: 5px;
					}

					.blog-header-date-margin {
						margin-right: 30px;
					}

					.blog-header-quick-word {
						margin-top: 15px;
					}

					.blog-main-content {
						margin: 20px 0 50px;
						padding: 25px 0 50px;
						border-top: 1px solid #7f8c8d;
					}

					.share-content {
						width: 100%;
						margin-top: 100px;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						position: relative;
					}

					@media (max-width: 575.98px) {
						.blog-header-image {
							height: 140px;
						}
					}
				`}</style>
			</article>
		</>
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
