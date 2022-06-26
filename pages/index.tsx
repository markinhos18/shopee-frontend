
import type { NextPage } from "next";

import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1>Hello Next.js</h1>
      <Footer />
    </>
  );
};

export default Home;
