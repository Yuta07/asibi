import { Metadata } from 'next'

import { Posts } from '@/components/pages/blog/Posts'

type MetaProps = {
	params: { tag: string }
}

export function generateMetadata({ params }: MetaProps): Metadata {
	return {
		title: `Blog - Tag ${params.tag}`,
		description: `This page is asibi3Q's blog page about ${params.tag} topic}.`,
		openGraph: {
			type: 'article',
			url: `https://asibi.dev/blog/tags/${params.tag}`,
			title: `Blog - Tag ${params.tag}`,
			description: `This page is asibi3Q's blog page about ${params.tag} topic}.`,
		},
		alternates: {
			canonical: `https://asibi.dev/blog/tags/${params.tag}`,
		},
	}
}

export default function Page({ params: { tag } }: { params: { tag: string | undefined } }) {
	return (
		<main>
			<Posts tag={tag} />
		</main>
	)
}
