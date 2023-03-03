export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<section>
			<nav>
				<ul>
					<li>nav</li>
					<li>nav</li>
				</ul>
			</nav>
			{children}
		</section>
	)
}
