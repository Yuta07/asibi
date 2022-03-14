import Image from 'next/image'

import styles from './Share.module.scss'

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

export const Share = ({ post }: Props) => {
	const pageUrl = `https://yutaaaaa.dev/${post.slug}`
	const encodeTitle = encodeURIComponent(post.title)

	return (
		<div className={styles.container}>
			<h3 className={styles.share}>SHARE</h3>
			<a
				href={`https://twitter.com/share?url=${pageUrl}&text=${encodeTitle}&via=yutaaaaa___`}
				rel="nofollow"
				className={styles.anchor}
			>
				<Image quality={85} src="../../assets/twitter.svg" alt="twitter_share" width={40} height={40} />
			</a>
		</div>
	)
}
