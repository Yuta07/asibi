import { FC } from 'react'

export const Delete: FC = ({ children }) => {
	return (
		<del>
			{children}
			<style jsx>{`
				del {
					background-image: linear-gradient(#e74c3c, #e74c3c);
					background-position: 0 50%;
					background-size: 100% 2px;
					background-repeat: repeat-x;
					color: #7f8c8d;
					text-decoration: none;
				}
			`}</style>
		</del>
	)
}
