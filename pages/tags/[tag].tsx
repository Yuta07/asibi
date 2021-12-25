import { Home } from '@components/domain/home'
import { ParamHeader } from '@components/domain/home/ParamHeader'
import { getSortedPostsDataWithTag } from '@lib/posts'

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const { tag } = params as { tag: string }

	const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1)
	const regTag = upperTag.replace('-', '.')

	const posts = getSortedPostsDataWithTag(regTag)

	return {
		props: {
			posts,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

const TagPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<ParamHeader total={posts.length} />
			<Home posts={posts} />
		</>
	)
}

export default TagPage
