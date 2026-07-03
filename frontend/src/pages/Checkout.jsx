import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "../components/CheckoutSummary";

const Checkout = () => {
  return (
    <Layout bg="bg-[var(--secondary)]">
      <Breadcrumbs />

      <section className="checkout-container">
        <CheckoutForm />

        <CheckoutSummary />
      </section>
    </Layout>
  );
};
export default Checkout;
