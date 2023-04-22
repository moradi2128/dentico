import "../styles/globals.css";
import "../styles/footerStyle.css";
import { GET_MENU } from "@/src/utils/gqlVariable";
import client from "client";
import Layout from "src/Layout/Layout ";
import { Analytics } from "@vercel/analytics/react";
import TranstionEffect from "src/subComponents/TranstionEffect";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, menuData }) {
  return (
    <AnimatePresence mode="wait" >
      <TranstionEffect>
        <Layout menuData={menuData}>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </TranstionEffect>
    </AnimatePresence>
  );
}

export default MyApp;

MyApp.getInitialProps = async (ctx) => {
  const { data: menuData } = await client.query({
    query: GET_MENU,
  });
  return { menuData };
};
