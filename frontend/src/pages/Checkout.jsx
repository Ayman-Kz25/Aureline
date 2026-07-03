import Layout from "../components/Layout";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";

const Checkout = () => {
  return (
    <Layout bg="bg-[var(--secondary)]">
      <section className="checkout-container">
        <CheckoutForm />

        <CheckoutSummary />
      </section>
    </Layout>
  );
};
export default Checkout;
