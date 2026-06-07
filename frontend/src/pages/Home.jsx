import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Signature from "../components/Signature";
import Atelier from "../components/Atelier";

const Home = () => {
  return (
    <Layout bg="bg-[var(--secondary)]">
      <Hero />
      <Features />
      <Signature />
      <Atelier />
    </Layout>
  );
};
export default Home;
