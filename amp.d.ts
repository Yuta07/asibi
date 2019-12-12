declare namespace JSX {
  interface AmpHtml {
    children: React.ReactNode;
    amp?: any;
  }

  interface IntrinsicElements {
    html: AmpHtml;
  }

  interface AmpImg {
    children?: Element;
    alt?: string;
    src?: string;
    width?: number;
    height?: number;
    layout?: string;
  }

  interface IntrinsicElements {
    'amp-img': AmpImg;
  }

  interface AmpList {
    children?: Element | undefined;
    layout?: string;
    width?: string;
    height?: string;
    src?: string;
    binding?: string;
    placeholder?: string | undefined;
  }

  interface IntrinsicElements {
    'amp-list': AmpList;
  }

  interface AmpTimeAgo {
    children?: string;
    class?: strin;
    width?: string;
    height?: string;
    datetime?: string;
    layout?: string;
    locale?: string;
  }

  interface IntrinsicElements {
    'amp-timeago': AmpTimeAgo;
  }
}
