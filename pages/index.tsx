import { InferGetStaticPropsType } from 'next'

import { Home } from '@components/domain/home'
import { generatedRssFeed } from '@lib/feed'
import { getSortedPostsData } from '@lib/posts'

export const getStaticProps = async () => {
	const posts = getSortedPostsData()

	generatedRssFeed()

	return {
		props: {
			posts,
		},
	}
}

const HomePage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <Home posts={posts} />
}

export default HomePage
