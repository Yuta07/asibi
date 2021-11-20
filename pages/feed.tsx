import { GetStaticProps } from 'next'

import { generatedRssFeed } from '@lib/feed'

export default function Feed() {
	return null
}

export const getStaticProps: GetStaticProps = async () => {
	generatedRssFeed()

	return {
		props: {},
	}
}
