import dayjs from 'dayjs'
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useMemo } from 'react'

import { CategoryTab } from '@/components/CategoryTab'
import { Layout } from '@/components/common/Layout'
import { SEO } from '@/components/common/SEO'
import { generatedRssFeed } from '@/lib/feed'
import { getSortedPostsData } from '@/lib/posts'
import styles from '@/styles/Blog.module.scss'

export const getStaticProps = async () => {
	const posts = getSortedPostsData()

	generatedRssFeed()

	return {
		props: {
			posts,
		},
	}
}

export default function BlogPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter()
	const { query } = router

	const renderPosts = useMemo(() => {
		if (query.tab === 'tech') {
			return posts.filter((post) => {
				return post.category === 'tech'
			})
		}

		if (query.tab === 'ordinary') {
			return posts.filter((post) => {
				return post.category === 'ordinary'
			})
		}

		if (query.tab === 'academic') {
			return posts.filter((post) => {
				return post.category === 'academic'
			})
		}

		return posts
	}, [query, posts])

	return (
		<>
			<SEO title="Blog" description="Blog" openGraph={{ url: 'blog', type: 'article' }} />
			<div className={styles.container}>
				<div className={styles.header}>
					<CategoryTab />
				</div>
				<div className={styles.articleContainer}>
					{renderPosts.length < 1 && <p className={styles.coming}>Coming soon.</p>}
					{renderPosts.map((post) => {
						return (
							<section key={post.slug} data-testid="entry-section">
								<Link href={`/blog/${post.slug}`} className={styles.anchor} data-testid="entry-slug-link">
									<div className={styles.eyecatchContainer}>
										<Image
											src={post.eyecatch}
											alt={post.title}
											width={60}
											height={60}
											className={styles.eyecatch}
											priority
										/>
									</div>
									<div className={styles.info}>
										<h2 className={styles.title}>{post.title}</h2>
										<p className={styles.preface}>{post.preface}</p>
										<div className={styles.bottom}>
											<p className={styles[post.category]}>{post.category}</p>
											<time className={styles.createdAt} dateTime={post.createdAt} itemProp="datePublished">
												{dayjs(post.createdAt).format('MMM D, YYYY')}
											</time>
										</div>
									</div>
								</Link>
							</section>
						)
					})}
				</div>
			</div>
		</>
	)
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
