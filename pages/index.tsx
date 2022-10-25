import Image from 'next/future/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

import { Accounts } from '@/components/common/Accounts'
import { Layout } from '@/components/common/Layout'
import { SEO } from '@/components/common/SEO'
import styles from '@/styles/Home.module.scss'

import type { ReactElement } from 'react'

export default function Home() {
	return (
		<>
			<SEO />
			<div className={styles.container}>
				<Image
					src="/tentative.png"
					alt="Picture of the author"
					width={100}
					height={100}
					className={styles.author}
					priority
				/>
				<p className={styles.intro}>Hi, YUTAWO is a web frontend engineer.</p>
				<Accounts />
				<Link href="/about">
					<a className={styles.readmore}>
						Read more
						<FiArrowRight color="#D3DBDE" size={14} />
					</a>
				</Link>
			</div>
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
