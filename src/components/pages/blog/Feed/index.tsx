import { generatedRssFeed } from '@/lib/feed'

function generatePostsToFeed() {
	generatedRssFeed()
}

export const Feed = () => {
	generatePostsToFeed()

	return null
}
