import { NextPage } from "next";
import Header from "../src/components/Header/Header";

const About: NextPage = () => {
  return (
    <>
      <Header />
      <h1>About</h1>
      <p>This is the about page</p>
    </>
  );
};

export default About;
