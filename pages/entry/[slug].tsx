import { BlogJsonLd, NextSeo } from 'next-seo'

import { Layout } from '@/components/common/Layout'
import { Post } from '@/components/feature/entry/slug'
import { getPostData, getSortedPostsData } from '@/lib/posts'

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import type { ReactElement } from 'react'

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

export default function PostPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
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
							url: 'https://yutaaaaa.dev/ogp.png',
							width: 800,
							height: 420,
							alt: post.slug,
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
				images={[`https://yutaaaaa.dev/ogp.png`]}
				datePublished={`${post.createdAt}T09:00:00+08:00`}
				dateModified={`${post.createdAt}T09:00:00+08:00`}
				authorName="yutaaaaa"
				description={post.preface}
			/>
			<Post post={post} />
		</>
	)
}

PostPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
