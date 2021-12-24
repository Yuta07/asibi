import { InferGetStaticPropsType } from 'next'

import { Home } from '@components/domain/home'
import { ParamHeader } from '@components/domain/home/ParamHeader'
import { getSortedPostsDataWithCategory } from '@lib/posts'

import type { GetStaticPaths, GetStaticPropsContext } from 'next'

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const { category } = params as { category: string }

	const posts = getSortedPostsDataWithCategory(category)

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
const CategoryPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<ParamHeader total={posts.length} />
			<Home posts={posts} />
		</>
	)
}

export default CategoryPage
