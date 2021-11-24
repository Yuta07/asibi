import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { generatedRssFeed } from '@lib/feed'
import { getSortedPostsData } from '@lib/posts'
import styles from '@styles/Home.module.scss'

type Props = {
	allPostsData: {
		excerpt: string
		quickword?: string
		date: string
		updated?: string
		title: string
		image: string
		id: string
		tag: string
	}[]
}

const Home: NextPage<Props> = ({ allPostsData }) => {
	return (
		<div className={styles.container}>
			<NextSeo
				title=""
				description="yutaka miyazakiのブログ"
				openGraph={{
					type: 'website',
					title: 'yutaka miyazakiのブログ',
					description: 'yutaka miyazakiのブログ一覧',
					url: 'https://yutaaaaa.dev',
				}}
			/>
			{allPostsData.map((data, i) => {
				return (
					<Link key={data.id} href={`/${data.id}`}>
						<a className={i === 0 ? styles.first : styles.blog}>
							<div className={styles[data.tag]}>
								<Image quality={85} src={data.image} alt={data.title} width={80} height={80} />
							</div>
							<div className={styles.description}>
								<div className={styles.dateBox}>
									<div className={styles.createdAt}>
										<Image quality={85} src="/images/created.svg" alt="created_icon" width={16} height={16} />
										<small className={styles.date}>{data.date}</small>
									</div>
									{data.updated && (
										<div className={styles.updatedAt}>
											<Image quality={85} src="/images/updated.svg" alt="updated_icon" width={16} height={16} />
											<small className={styles.date}>{data.updated}</small>
										</div>
									)}
								</div>
								<h2 className={styles.title}>{data.title}</h2>
								<p className={styles.excerpt}>
									{data.excerpt.slice(0, 80)}
									{data.excerpt.length > 80 && '...'}
								</p>
							</div>
						</a>
					</Link>
				)
			})}
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData()

	generatedRssFeed()

	return {
		props: {
			allPostsData,
		},
	}
}

export default Home
