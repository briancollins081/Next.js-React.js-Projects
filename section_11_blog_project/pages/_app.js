import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <div id="notifications"></div>
    </Layout>
  );
}

export default MyApp;
