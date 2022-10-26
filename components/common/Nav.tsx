import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { TbGridDots } from 'react-icons/tb'

import styles from './Nav.module.scss'

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef(null)

	const router = useRouter()
	const { pathname } = router

	useEffect(() => {
		const handler = () => {
			setIsOpen(false)
		}

		window.addEventListener('click', handler, false)

		return () => {
			window.removeEventListener('click', handler, false)
		}
	}, [])

	const handleDropdown = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
		e.stopPropagation()

		setIsOpen((prev) => !prev)
	}

	return (
		<nav className={styles.container}>
			<button className={styles.button} onClick={handleDropdown} data-testid="nav-button">
				<TbGridDots size={24} color={isOpen ? 'hsl(341, 77%, 63%)' : 'hsl(196, 14%, 85%)'} />
			</button>
			{isOpen && (
				<ul className={styles.listContainer} ref={ref}>
					<li>
						<Link href="/">
							<a className={pathname === '/' ? styles.activeLink : styles.navLink} onClick={handleDropdown}>
								Home
							</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a className={pathname === '/about' ? styles.activeLink : styles.navLink} onClick={handleDropdown}>
								About
							</a>
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<a className={pathname === '/blog' ? styles.activeLink : styles.navLink} onClick={handleDropdown}>
								Blog
							</a>
						</Link>
					</li>
				</ul>
			)}
		</nav>
	)
}
