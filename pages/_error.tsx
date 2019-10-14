import React, { Fragment } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  errorCode: number;
};

const Error = (props: Props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.errorCode}
    </Fragment>
  );
};

Error.getInitialProps = (res: any, err: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
