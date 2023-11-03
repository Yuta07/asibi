'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

import s from './styles.module.css'

type Props = {
	href: string
}

type OgName = 'title' | 'site_name' | 'description' | 'image' | 'image:alt'
type OgpState = {
	[key in OgName]: string
}

let title = ''
let description = ''
let imageURL = ''
let imageAlt = ''

export const EmbedLink = ({ href }: Props) => {
	const [ogState, setOgState] = useState<OgpState | null>(null)

	useEffect(() => {
		const getOgp = async () => {
			const data = await axios
				.post(`/api/ogp?url=${href}`)
				.then((res) => {
					const { data, status } = res.data as { data: OgpState; status: number }

					if (status === 200) {
						return data
					} else {
						return null
					}
				})
				.catch(() => {
					return null
				})

			setOgState(data)
		}

		if (href) {
			;(async () => {
				await getOgp()
			})()
		}
	}, [href])

	if (ogState == null) return null

	if ('title' in ogState) {
		title = ogState['title']
	} else if ('site_name' in ogState) {
		title = ogState['site_name']
	}

	if ('description' in ogState) {
		description = ogState['description']
	}

	if ('image' in ogState) {
		imageURL = ogState['image']
	}

	if ('image:alt' in ogState) {
		imageAlt = ogState['image:alt']
	} else if ('title' in ogState) {
		imageAlt = ogState['title']
	}

	if (!Object.keys(ogState).length) {
		return (
			<a
				className={s.normalLink}
				data-testid="markdown-embed-only-link"
				href={href}
				rel="noopener noreferrer"
				target="_blank"
			>
				{href}
			</a>
		)
	}

	return (
		<>
			<a
				className={s.container}
				data-testid="markdown-embed-link"
				href={href}
				rel="noopener noreferrer"
				target="_blank"
			>
				<div className={s.ogInfo}>
					<div className={s.ogTitle}>{title}</div>
					{description && <span className={s.ogDescription}>{description}</span>}
					<span className={s.anchor}>{href}</span>
				</div>
				<div className={s.thumbnail}>
					<img alt={imageAlt} className={s.ogImage} src={imageURL} />
				</div>
			</a>
			<a className={s.dummyHref} href={href} rel="noopener noreferrer" target="_blank">
				<span>{href}</span>
			</a>
		</>
	)
}
