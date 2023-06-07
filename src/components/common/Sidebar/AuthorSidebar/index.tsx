import s from './styles.module.css'

export const AuthorSidebar = () => {
	return (
		<aside className={s.container}>
			<h2 className={s.title}>Author</h2>
			<div className={s.authorInfo}>
				<div>
					<p>authore</p>
					<div>icon links</div>
				</div>
				<p>description</p>
			</div>
		</aside>
	)
}
