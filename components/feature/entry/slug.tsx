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
	return (
		<article>
			<PostHeader post={post} />
			<PostBody post={post} />
			<Share slug={post.slug} title={post.title} />
		</article>
	)
}
