import "../styles/globals.css";
import "../styles/footerStyle.css";
import { GET_MENU } from "@/src/utils/gqlVariable";
import client from "client";
import Layout from "src/Layout/Layout ";
import { Analytics } from "@vercel/analytics/react";
function MyApp({ Component, pageProps, menuData }) {
  return (
    <Layout menuData={menuData}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async (ctx) => {
  const { data: menuData } = await client.query({
    query: GET_MENU,
  });
  return { menuData };
};
