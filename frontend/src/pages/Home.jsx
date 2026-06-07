import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Signature from "../components/Signature";
import Atelier from "../components/Atelier";
import Archive from "../components/Archive";
import Story from "../components/Story";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Layout bg="bg-[var(--secondary)]">
      <Hero />
      <Features />
      <Signature />
      <Atelier />
      <Archive />
      <Story />
      <Newsletter />
      <Footer />
    </Layout>
  );
};
export default Home;
