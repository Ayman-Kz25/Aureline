import { CreditCard, Landmark, Wallet2 } from "lucide-react";

const CheckoutForm = () => {
  return (
    <form className="checkout-form">
      {/* Contact */}
      <section className="checkout-section">
        <h2>Contact Information</h2>

        <div className="checkout-grid">
          <div className="form-group full">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="John"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Doe"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              placeholder="+92 300 1234567"
            />
          </div>
        </div>
      </section>

      {/* Shipping */}
      <section className="checkout-section">
        <h2>Shipping Address</h2>

        <div className="checkout-grid">

          <div className="form-group full">
            <label>Street Address</label>
            <input
              type="text"
              placeholder="Street address"
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
            />
          </div>

          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              placeholder="State"
            />
          </div>

          <div className="form-group">
            <label>Postal Code</label>
            <input
              type="text"
              placeholder="54000"
            />
          </div>

          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              placeholder="Pakistan"
            />
          </div>

        </div>
      </section>

      {/* Payment */}
      <section className="checkout-section">
        <h2>Payment Method</h2>

        <div className="payment-options">

          <label className="payment-card active">
            <input
              type="radio"
              name="payment"
              defaultChecked
            />
            <CreditCard size={22} />
            <span>Credit / Debit Card</span>
          </label>

          <label className="payment-card">
            <input
              type="radio"
              name="payment"
            />
            <Landmark size={22} />
            <span>Bank Transfer</span>
          </label>

          <label className="payment-card">
            <input
              type="radio"
              name="payment"
            />
            <Wallet2 size={22} />
            <span>Cash on Delivery</span>
          </label>

        </div>
      </section>

    </form>
  );
};

export default CheckoutForm;