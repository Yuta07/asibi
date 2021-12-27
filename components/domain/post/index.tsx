import { Share } from '@components/common/Share'

import { PostBody } from './PostBody'
import { PostHeader } from './PostHeader'

type Props = {
	post: {
		title: string
		preface: string
		createdAt: string
		updatedAt: string
		category: string
		tags: string[]
		slug: string
		content: string
	}
}

export const Post = ({ post }: Props) => {
	return (
		<article>
			<PostHeader post={post} />
			<PostBody post={post} />
			<Share post={post} />
		</article>
	)
}
