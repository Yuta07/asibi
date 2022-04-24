import { BlogJsonLd, NextSeo } from 'next-seo'

import { Post } from '@components/feature/entry/slug'
import { getPostData, getSortedPostsData } from '@lib/posts'

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = getSortedPostsData()

	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}))

	return {
		paths: paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const { slug } = params as { slug: string }

	const post = await getPostData(slug)

	return {
		props: {
			post,
		},
	}
}

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const CLOUDINARY_URL = `https://res.cloudinary.com/https-yutaaaaa-vercel-app/image/upload/l_text:TakaoGothic_50_bold:${post.title},co_rgb:000000,w_760,c_fit/v1640180870/cloudinary_fzk9qg.png`

	return (
		<>
			<NextSeo
				title={post.title}
				description={post.preface}
				openGraph={{
					type: 'website',
					title: post.title,
					description: post.preface,
					url: `https://yutaaaaa.dev/${post.slug}`,
					site_name: post.title,
					images: [
						{
							url: CLOUDINARY_URL,
							width: 800,
							height: 420,
							alt: 'yutanote image',
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
				url={`https://yutaaaaa.dev/${post.slug}`}
				title={post.title}
				images={[CLOUDINARY_URL]}
				datePublished={`${post.createdAt}T09:00:00+08:00`}
				dateModified={`${post.createdAt}T09:00:00+08:00`}
				authorName="yutaaaaa"
				description={post.preface}
			/>
			<Post post={post} />
		</>
	)
}

export default PostPage
