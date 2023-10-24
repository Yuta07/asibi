'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

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
				className="normalLink"
				data-testid="markdown-embed-only-link"
				href={href}
				rel="noopener noreferrer"
				target="_blank"
			>
				{href}
				<style jsx>{`
					.normalLink {
						color: var(--color-sunflower);
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
			<a className="container" data-testid="markdown-embed-link" href={href} rel="noopener noreferrer" target="_blank">
				<div className="ogInfo">
					<div className="ogTitle">{title}</div>
					{description && <span className="ogDescription">{description}</span>}
					<span className="anchor">{href}</span>
				</div>
				<div className="thumbnail">
					<img alt={imageAlt} className="ogImage" src={imageURL} />
				</div>
			</a>
			<a className="dummyHref" href={href} rel="noopener noreferrer" target="_blank">
				<span>{href}</span>
			</a>
			<style jsx>{`
				.container {
					margin: 0 auto;
					display: flex;
					align-items: center;
					border: var(--border-normal);
					border-radius: var(--rounded-base);
					overflow: hidden;
					text-decoration: none;
					transition: 0.2s ease-in;
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
					color: var(--text);
					font-size: var(--font-md);
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

				.ogDescription {
					margin-top: 4px;
					color: var(--gray);
					font-size: var(--font-sm);
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

				.anchor {
					margin-top: 4px;
					color: var(--text);
					font-size: var(--font-xs);
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
						font-size: var(--font-sm);
						-webkit-line-clamp: 1;
					}

					.ogDescription {
						font-size: var(--font-xs);
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
