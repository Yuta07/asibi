'use client'

import XIcon from '/public/assets/social/x-logo.svg'

import s from './styles.module.css'

type Props = {
	slug: string
	title: string
}

export const Share = ({ slug, title }: Props) => {
	const pageUrl = `https://asibi.dev/blog/${slug}`
	const encodeTitle = encodeURIComponent(title)

	return (
		<div className={s.container}>
			<h3 className={s.share}>SHARE</h3>
			<a
				className={s.anchor}
				data-testid="blog-share-button"
				href={`https://twitter.com/share?url=${pageUrl}&text=${encodeTitle}&via=asibi3Q`}
				rel="nofollow"
			>
				<XIcon height={40} width={40} className={s.shareIcon} viewBox="0 0 1200 1200" />
			</a>
		</div>
	)
}
