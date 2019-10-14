declare namespace JSX {
  interface AmpImg {
    alt?: string;
    src?: string;
    width?: string;
    height?: string;
    layout?: string;
  }
  interface IntrinsicElements {
    'amp-img': AmpImg;
  }

  interface AmpHtml {
    children: React.ReactNode;
    amp?: any;
  }
  interface IntrinsicElements {
    html: AmpHtml;
  }
}
