'use client'

import Image from 'next/image'

import { useThemeState } from '@/contexts/ThemeProvider'

import s from './styles.module.css'

export const AboutMe = () => {
	const { state } = useThemeState()

	const avatarClassName = state === 'light' ? 'avatarLight' : 'avatarDark'

	return (
		<div>
			<Image alt="asibi3Q" className={s[avatarClassName]} height={88} src="/icon/icon.svg" width={88} />
			<h2 className={s.hello}>Hi there 👋</h2>
			<p className={s.intro}>I'm asibi3Q, Web Frontend engineer living in Kawasaki from 🏯 Nagoya, Japan.</p>
			<p className={s.intro}>
				After working as an SIer in research, maintenance, and customized development, I am working as a freelance
				frontend engineer. Currently working as a web application engineer.
			</p>
			<p className={s.intro}>Mainly focused on React and Next.js, but I'm also interested in many things.</p>
			<p className={s.intro}>I love football and favorite team is Man United. I like fish rather than meat. Thanks!!</p>
			<a
				className={s.link}
				href="https://shorthaired-seaplane-f56.notion.site/Curriculum-vitae-fecdfaa602c54dbf8da36e5533467bc7"
				rel="noopener noreferrer"
				target="_blank"
			>
				View my CV<span>→</span>
			</a>
		</div>
	)
}
