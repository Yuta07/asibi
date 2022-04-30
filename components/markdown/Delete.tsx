import { ReactNode, VFC } from 'react'

export const Delete: VFC<{ children: ReactNode }> = ({ children }) => {
	return (
		<del className="container">
			{children}
			<style jsx>{`
				.container {
					background-image: linear-gradient(var(--color-gray), var(--color-gray));
					background-position: 0 50%;
					background-size: 100% 2px;
					background-repeat: repeat-x;
					color: var(--color-gray);
					text-decoration: none;
				}
			`}</style>
		</del>
	)
}
