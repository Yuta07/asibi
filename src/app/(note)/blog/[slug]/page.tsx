import { PostBody } from '@/components/pages/blog/PostBody'
import { PostHeader } from '@/components/pages/blog/PostHeader'
import { Share } from '@/components/ui/Share'
import { getPostData } from '@/lib/posts'

import s from './Page.module.css'

function getPost(slug: string) {
	const res = getPostData(slug)

	return res
}

export default function Page({ params: { slug } }: { params: { slug: string } }) {
	const data = getPost(slug)

	return (
		<div className={s.container}>
			<PostHeader post={data} />
			<PostBody post={data} />
			<Share slug={slug} title={data.title} />
		</div>
	)
}
