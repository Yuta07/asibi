import { InferGetStaticPropsType } from 'next'

import { Posts } from '@components/feature/entry'
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

const PostsPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <Posts posts={posts} />
}

export default PostsPage
