import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";

const Home = () => {
  return (
    <Layout bg="bg-[var(--secondary)]">
      <Hero />
      <Features />
    </Layout>
  );
};
export default Home;
