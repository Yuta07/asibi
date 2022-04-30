import Link from 'next/link'

import { LayoutWithHeader } from '@/components/common/Layout/LayoutWithHeader'

import type { ReactElement } from 'react'

export default function Custom404() {
	return (
		<div className="container">
			<h1 className="hero">404</h1>
			<p className="lost-txt">Let's go back. There's nothing here.</p>
			<Link href="/">
				<a className="return-link">Return to TOP</a>
			</Link>
			<style jsx>{`
				.container {
					text-align: center;
				}

				.hero {
					font-size: 100px;
					letter-spacing: 20px;
					color: transparent;
					background: linear-gradient(to right bottom, #bf9ef2 0%, #e8eb93 100%);
					background-clip: text;
					-webkit-background-clip: text;
				}

				.lost-txt {
					margin-top: 8px;
					color: var(--color-gray);
					font-size: var(--font-size-l);
				}

				.return-link {
					margin-top: 20px;
					display: inline-block;
					color: var(--color-text);
					font-size: var(--font-size-xl);
					font-weight: var(--font-weight-bold);
					text-decoration: underline;
				}

				.return-link:hover {
					opacity: 0.7;
					transition: 0.2s;
				}
			`}</style>
		</div>
	)
}

Custom404.getLayout = function getLayout(page: ReactElement) {
	return <LayoutWithHeader>{page}</LayoutWithHeader>
}
