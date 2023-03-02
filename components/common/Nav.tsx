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
						<Link href="/" className={pathname === '/' ? styles.activeLink : styles.navLink} onClick={handleDropdown}>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={pathname === '/about' ? styles.activeLink : styles.navLink}
							onClick={handleDropdown}
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="/blog"
							className={pathname === '/blog' ? styles.activeLink : styles.navLink}
							onClick={handleDropdown}
						>
							Blog
						</Link>
					</li>
				</ul>
			)}
		</nav>
	)
}
