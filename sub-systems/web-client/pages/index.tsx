import Head from 'next/head'
import { NextPage } from 'next';
import Layout from '../components/Layout'


const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => {


  return (
    <>
      <Head>
        <title>websocket poc</title>
      </Head>
      <p>{'Hello World'}</p>
      <p>{userAgent}</p>
      <Layout />
    </>
  )
}


Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Index
