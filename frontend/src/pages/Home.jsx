import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Signature from "../components/Signature";
import Atelier from "../components/Atelier";
import Archive from "../components/Archive";

const Home = () => {
  return (
    <Layout bg="bg-[var(--secondary)]">
      <Hero />
      <Features />
      <Signature />
      <Atelier />
      <Archive />
    </Layout>
  );
};
export default Home;
