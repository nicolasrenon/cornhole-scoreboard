import Head from 'next/head';
import { string } from 'prop-types';

export default function DocumentHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

DocumentHead.defaultProps = {
  title: 'Cornhole Scoreboard',
};

DocumentHead.propTypes = {
  title: string,
};
