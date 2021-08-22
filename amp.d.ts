// ref: https://stackoverflow.com/questions/50585952/typescript-and-google-amp-property-amp-img-does-not-exist-on-type-jsx-intrin/50601125#50601125

// Any element you create will be accepted
declare namespace JSX {
	interface IntrinsicElements {
		[elemName: string]: any
	}
}

// The elements you list here will be accepted, attributes don't matter
declare namespace JSX {
	interface IntrinsicElements {
		'amp-img': any
	}
}

// The elements you list here will be accepted, and only with the attributes that you include here
declare namespace JSX {
	interface AmpImg {
		alt?: string
		src?: string
		width?: string
		height?: string
		layout?: string
	}
	interface IntrinsicElements {
		'amp-img': AmpImg
	}
}
