import Head from 'next/head';

type Props = {
  title: string;
  errorCode: number;
};

const Error = (props: Props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.errorCode}
    </>
  );
};

Error.getInitialProps = (res: any, err: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
