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

	let title = ''
	let description = ''
	let imageURL = ''
	let imageAlt = ''

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
			<a href={href} className="normalLink" target="_blank" rel="noopener noreferrer">
				{href}
				<style jsx>{`
					.normalLink {
						margin: 0 4px;
						color: var(--color-main-blue);
					}

					.normalLink:hover {
						text-decoration: underline;
					}
				`}</style>
			</a>
		)
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
					transition: var(--animation-transition) ease-in;
				}

				.container:hover {
					filter: brightness(70%);
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
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
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
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					overflow: hidden;
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

				@media screen and (max-width: 640px) {
					.ogTitle {
						font-size: var(--font-size-s);
						-webkit-line-clamp: 1;
					}

					.ogDescription {
						font-size: var(--font-size-xs);
					}

					.thumbnail {
						width: 120px;
						height: 80px;
					}
				}
			`}</style>
		</>
	)
}
