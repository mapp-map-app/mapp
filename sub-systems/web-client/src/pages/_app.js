import Head from 'next/head'
import Content from '../components/page-layout/Content'
import Header from '../components/page-layout/Header'
import Footer from '../components/page-layout/Footer'
import MainView from '../components/page-layout/MainView'
import '../css/main.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{'MAPP'}</title>
    </Head>
    <Content>
      <MainView>
        <Component {...pageProps} />
      </MainView>
      <Footer />
    </Content>
  </>
)

export default App
