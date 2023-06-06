import Link from 'next/link'

import { getAllPostsTags } from '@/lib/posts'

import s from './styles.module.css'

function getTags() {
	const res = getAllPostsTags()

	return res
}

export const TagsSidebar = () => {
	const data = getTags()

	return (
		<section className={s.container}>
			<h2 className={s.title}>Tags</h2>
			<div className={s.tags}>
				{data.map((data) => {
					return (
						<Link key={data} className={s.tagLink} href={`/blog/tags/${data}`}>
							<span>{data}</span>
						</Link>
					)
				})}
			</div>
		</section>
	)
}
