export default function Custom404() {
	return (
		<div className="container">
			<h1 className="hero">404</h1>
			<p className="lost">Let's go back. There's nothing here.</p>
			<style jsx>{`
				.hero {
					font-size: 160px;
					letter-spacing: 20px;
					text-align: center;
					background: linear-gradient(217deg, rgb(255 141 0), rgba(255, 0, 0, 0) 70.71%),
						linear-gradient(127deg, rgb(255 247 0), rgba(0, 255, 0, 0) 70.71%),
						linear-gradient(336deg, rgb(255 0 94), rgba(0, 0, 255, 0) 70.71%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}

				.lost {
					margin-top: 40px;
					font-size: 20px;
					text-align: center;
				}
			`}</style>
		</div>
	)
}
