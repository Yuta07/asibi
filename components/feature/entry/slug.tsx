import { SEO } from '@/components/common/SEO'

import { PostBody } from './PostBody'
import { PostHeader } from './PostHeader'
import { Share } from './Share'

type Props = {
	post: {
		title: string
		preface: string
		attention: string
		createdAt: string
		category: string
		tags: string[]
		slug: string
		content: string
	}
}

export const Entry = ({ post }: Props) => {
	if (post == null) return null

	return (
		<>
			<SEO title={post.title} description={post.preface} />
			<article>
				<PostHeader post={post} />
				<PostBody post={post} />
				<Share post={post} />
			</article>
		</>
	)
}
