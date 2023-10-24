import { Metadata } from 'next'

import { PostBody } from '@/components/pages/blog/PostBody'
import { PostHeader } from '@/components/pages/blog/PostHeader'
import { Share } from '@/components/ui/Share'
import { getPostData } from '@/lib/posts'

import s from './styles.module.css'

type MetaProps = {
	params: { slug: string }
}

function getPost(slug: string) {
	const res = getPostData(slug)

	return res
}

export function generateMetadata({ params }: MetaProps): Metadata {
	const data = getPost(params.slug)

	return {
		title: `${params.slug}`,
		description: data.preface,
		keywords: data.tags,
		category: 'tech',
		openGraph: {
			type: 'article',
			url: `https://asibi.dev/blog/${params.slug}`,
			title: `${params.slug}`,
			description: data.preface,
		},
		alternates: {
			canonical: `https://asibi.dev/blog/${params.slug}`,
		},
	}
}

export default function Page({ params: { slug } }: { params: { slug: string } }) {
	const data = getPost(slug)

	return (
		<article className={s.articleContainer}>
			<PostHeader post={data} />
			<div className={s.contents}>
				<main>
					<PostBody post={data} />
				</main>
			</div>
			<div className={s.shareField}>
				<Share slug={slug} title={data.title} />
			</div>
		</article>
	)
}
