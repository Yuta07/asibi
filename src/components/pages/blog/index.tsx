import { TagsSidebar } from '@/components/common/Sidebar/TagsSidebar'

import s from './Blog.module.css'
import { Posts } from './Posts'

type Props = {
	tag?: string
}

export default function Blog({ tag }: Props) {
	return (
		<main className={s.container}>
			<Posts tag={tag} />
			<TagsSidebar />
		</main>
	)
}
