import Image from 'next/future/image'
import Link from 'next/link'
import { SlEmotsmile, SlNotebook } from 'react-icons/sl'

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
					src="/assets/tentative.png"
					alt="Picture of the author"
					width={80}
					height={80}
					className={styles.author}
					priority
				/>
				<p className={styles.intro}>Hi, YUTAWO is a web frontend engineer.</p>
				<Accounts />
				<div className={styles.linkContainer}>
					<Link href="/about">
						<a className={styles.aboutmore}>
							<SlEmotsmile color="#D3DBDE" size={20} />
							About
						</a>
					</Link>
					<Link href="/blog">
						<a className={styles.blogmore}>
							<SlNotebook color="#191b1f" size={20} />
							Blog
						</a>
					</Link>
				</div>
			</div>
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
