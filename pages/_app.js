
import '../styles/style.scss';
import '../styles/Dropdown.css';
import '../styles/Navbar.css';
import Layout from '../src/components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
