import Image from 'next/image'

import styles from './styles.module.css'

type Props = {
	slug: string
	title: string
}

export const Share = ({ slug, title }: Props) => {
	const pageUrl = `https://asibi.dev/blog/${slug}`
	const encodeTitle = encodeURIComponent(title)

	return (
		<div className={styles.container}>
			<h3 className={styles.share}>SHARE</h3>
			<a
				className={styles.anchor}
				data-testid="blog-share-button"
				href={`https://twitter.com/share?url=${pageUrl}&text=${encodeTitle}&via=yuta030Q`}
				rel="nofollow"
			>
				<Image alt="twitter_share" height={40} src="/assets/twitter_share.svg" width={40} />
			</a>
		</div>
	)
}
