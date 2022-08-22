import { Layout } from '@/components/common/Layout'
import { SEO } from '@/components/common/SEO'
import { Entry } from '@/components/feature/entry/slug'
import config from '@/config/seo.json'
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
		fallback: 'blocking',
	}
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const { slug } = params as { slug: string }

	const post = await getPostData(slug)

	return {
		props: {
			post,
		},
		revalidate: 3600,
	}
}

export default function EntryPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<SEO
				title={post.title}
				description={post.preface}
				openGraph={{ type: 'article', url: `${config.openGraph.url}/${post.slug}` }}
				twitter={{ cardType: 'summary_large_image' }}
			/>
			<Entry post={post} />
		</>
	)
}

EntryPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
