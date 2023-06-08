import { useEffect, useState } from 'react'

const threshold = 0

export const useScrollOffsetTop = (ref?: React.RefObject<HTMLElement>) => {
	const [clientRectTop, setClientRectTop] = useState(0)
	const [pageYOffsetTop, setPageYOffsetTop] = useState(0)
	const [isScrollUp, setIsScrollUp] = useState<boolean | undefined>(undefined)

	useEffect(() => {
		if (!ref?.current) return

		let ticking = false

		const updateScroll = () => {
			const scroll = () => {
				if (!ref?.current) return

				const clientRectTop = ref.current.getBoundingClientRect().top
				setClientRectTop(clientRectTop)
				const pageYOffset = window.pageYOffset
				setPageYOffsetTop(pageYOffset)

				if (Math.abs(pageYOffset - pageYOffsetTop) < threshold) {
					ticking = false

					return
				}

				setIsScrollUp(pageYOffset < pageYOffsetTop)
				ticking = false
			}

			const timerHandler = setTimeout(() => {
				scroll()
			}, 100)

			return () => {
				clearTimeout(timerHandler)
			}
		}

		const scrollHandler = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScroll)

				ticking = true
			}
		}

		window.addEventListener('scroll', scrollHandler)

		return () => {
			window.removeEventListener('scroll', scrollHandler)
		}
	}, [pageYOffsetTop]) // eslint-disable-line

	return { clientRectTop, pageYOffsetTop, isScrollUp }
}
