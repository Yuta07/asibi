import { useAmp } from 'next/amp';

export const config = { amp: 'hybrid' };

export const Logo = () => {
  const isAmp = useAmp();

  return isAmp ? (
    <a href="/">
      <amp-img src="/logo.svg" fallback="" width="40" height="40" layout="intrinsic" alt="blog-logo"></amp-img>
      <style jsx>{`
        amp-img {
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
        }
      `}</style>
    </a>
  ) : (
    <a href="/">
      <img src="/logo.svg" width="40px" height="40px" alt="blog-logo" className="logo-image" />
      <style jsx>{`
        .logo-image {
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25));
        }
      `}</style>
    </a>
  );
};
