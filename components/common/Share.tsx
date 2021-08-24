import Image from 'next/image'
import styles from './Share.module.scss'

type Props = {
	slug: string
	title: string
}

export const Share = ({ slug, title }: Props) => {
	const pageUrl = `https://yutaaaaa.vercel.app/blogs/${slug}`
	const encodeTitle = encodeURIComponent(title)

	return (
		<div className={styles.container}>
			<h3 className={styles.share}>SHARE</h3>
			<a
				href={`https://twitter.com/share?url=${pageUrl}&text=${encodeTitle}&via=yutaaaaa___`}
				rel="nofollow"
				className={styles.anchor}
			>
				<Image quality={85} src="/images/twitter.svg" alt="twitter_share" width={40} height={40} />
			</a>
		</div>
	)
}
