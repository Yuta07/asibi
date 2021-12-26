import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

type Props = {
	href: string
}

type OgpState = {
	[key in string]: string
}

export const EmbedLink = ({ href }: Props) => {
	const [ogState, setOgState] = useState<OgpState[] | null>(null)

	const fetchOgpData = useCallback(async () => {
		await axios.post(`/api/getOgp?url=${href}`).then((res) => {
			const { data, status } = res as { data: OgpState[]; status: number }

			if (status === 200) {
				setOgState(data)
			}
		})
	}, [href])

	useEffect(() => {
		fetchOgpData()
	}, [fetchOgpData])

	if (ogState === null) return null

	console.log(ogState)

	let title = ''
	let description = ''
	let imageURL = ''
	let imageAlt = ''

	if ('og:title' in ogState) {
		title = ogState['og:title']
	} else if ('og:site_name' in ogState) {
		title = ogState['og:site_name']
	}

	if ('og:description' in ogState) {
		description = ogState['og:description']
	}

	if ('og:image' in ogState) {
		imageURL = ogState['og:image']
	}

	if ('og:image:alt' in ogState) {
		imageAlt = ogState['og:image:alt']
	} else if ('og:title' in ogState) {
		imageAlt = ogState['og:title']
	}

	return (
		<>
			<a className="container" href={href} target="_blank" rel="noopener noreferrer">
				<div className="ogInfo">
					<h1 className="ogTitle">{title}</h1>
					{description && <p className="ogDescription">{description}</p>}
					<span className="anchor">{href}</span>
				</div>
				<div className="thumbnail">
					<img src={imageURL} alt={imageAlt} className="ogImage" />
				</div>
			</a>
			<a href={href} className="dummyHref" target="_blank" rel="noopener noreferrer">
				<span>{href}</span>
			</a>
			<style jsx>{`
				.container {
					margin: 0 auto;
					display: flex;
					align-items: center;
					border: var(--border-normal);
					border-radius: var(--line-radius);
					overflow: hidden;
				}

				.ogInfo {
					padding: 20px;
					display: flex;
					flex: 1;
					flex-direction: column;
				}

				.ogTitle {
					color: var(--color-primary);
					font-size: var(--font-size-m);
				}

				.ogDescription {
					margin-top: 4px;
					color: var(--color-gray);
					font-size: var(--font-size-s);
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

				.anchor {
					margin-top: 4px;
					color: var(--color-primary);
					font-size: var(--font-size-xs);
				}

				.thumbnail {
					width: 200px;
					height: 120px;
				}

				.ogImage {
					width: 100%;
					height: 100%;
					object-fit: cover;
					flex-shrink: 0;
				}

				.dummyHref {
					display: none;
				}
			`}</style>
		</>
	)
}
