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

export const Post = ({ post }: Props) => {
	return (
		<article>
			<PostHeader post={post} />
			<PostBody post={post} />
			<Share post={post} />
		</article>
	)
}
