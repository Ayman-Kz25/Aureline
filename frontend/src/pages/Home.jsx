import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Signature from "../components/Signature";

const Home = () => {
  return (
    <Layout bg="bg-[var(--secondary)]">
      <Hero />
      <Features />
      <Signature />
    </Layout>
  );
};
export default Home;
