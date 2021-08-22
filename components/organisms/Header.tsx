import { useRouter } from 'next/router'
import { Logo } from '../atoms/Logo'

export const Header = () => {
	const router = useRouter()

	return (
		<header className="header-outer" id="pageTopElement">
			<div className="header-content">
				<Logo />
				<ul className="header-nav">
					<li className="header-list">
						<a href="/blog" className={`header-anchor ${router.pathname === '/blog' && 'current-link'}`}>
							View Blog
						</a>
					</li>
				</ul>
			</div>
			<style jsx>{`
				.header-outer {
					width: 100%;
				}

				.header-content {
					max-width: 760px;
					margin: 0 auto;
					padding: 60px 20px;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.header-nav {
					display: flex;
					height: 40px;
					padding-left: 0;
					margin: 0;
					font-weight: 550;
					list-style: none;
				}

				.header-list {
					margin: 0 8px;
				}

				.header-anchor {
					padding: 10px 40px;
					display: inline-block;
					background: #efefef;
					border: none;
					border-radius: 15px;
					box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5),
						6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
					transition: 0.3s ease-in-out;
					cursor: pointer;
				}

				.header-anchor:hover {
					box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4),
						2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
				}

				.current-link {
					color: #3fb0ac;
					box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.5),
						inset 2px 2px 2px rgba(255, 255, 255, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
				}

				.current-link:hover {
					box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.5),
						inset 2px 2px 2px rgba(255, 255, 255, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
				}

				@media (max-width: 575.98px) {
					.header-list {
						margin: 0 5px;
					}

					.header-anchor {
						font-size: 12px;
						padding: 8px 40px;
					}
				}
			`}</style>
		</header>
	)
}
