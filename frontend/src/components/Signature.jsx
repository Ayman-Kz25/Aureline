import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Signature = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="signature">
      <div class="sig-content">
        <h2>Signature Pieces</h2>
        <p>A curated selection of timeless fashion and jewelry essentials.</p>
        <button>
          <a href="/shop.html" class="btn">
            Shop now
          </a>
        </button>
      </div>
      <div class="sig-grid">
        <div class="sig-item">
          <img
            src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1780326633/Aureline/Golden_Grace_Sparkle_bsarjv.jpg"
            alt
          />
          <span class="tag exclusive">Exclusive</span>
          <h3>Golden Grace Jewelry Set</h3>
          <p>$390.00</p>
        </div>

        <div class="sig-item">
          <img
            src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1780326882/Aureline/Luxury_Cream_Top_Handle_Bag_with_Scarf___Elegant_Designer_Style_Handbag_for_Women_iwocmk.jpg"
            alt
          />
          <span class="tag handmade">Handmade</span>
          <h3>Cream Top Handle Bag</h3>
          <p>$210.00</p>
        </div>

        <div class="sig-item">
          <img
            src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1780326898/Aureline/Elegant_Imitation_Silk_Oversized_Shawl_Scarf_oygjym.jpg"
            alt
          />
          <span class="tag exclusive">Exclusive</span>
          <h3>Elegant Silk Scarf</h3>
          <p>$130.00</p>
        </div>

        <div class="sig-item">
          <img
            src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1780325601/Aureline/silk_suit_o2thcw.jpg"
            alt
          />
          <span class="tag best">Best Seller</span>
          <h3>Ivory Silk Suit</h3>
          <p>$260.00</p>
        </div>

        <div class="sig-item">
          <img
            src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1780326686/Aureline/Classy_neutral_handbag_outfit_soft_luxury_fashion_look_iyopr2.jpg"
            alt
          />
          <span class="tag new">New</span>
          <h3>Soft Beige Handbag</h3>
          <p>$180.00</p>
        </div>

        <div class="sig-item">
          <img
            src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1780326657/Aureline/Gold_Butterfly_Bracelet_Stack_Set_m0v58q.jpg"
            alt
          />
          <span class="tag best">Best Seller</span>
          <h3>Gold Butterfly Bracelet</h3>
          <p>$150.00</p>
        </div>

        <div class="sig-item">
          <img
            src="https://res.cloudinary.com/dhjf7rok5/image/upload/v1780325600/Aureline/check_link_wumen_fashion_new_trend_kfeya1.jpg"
            alt
          />
          <span class="tag limited">Limited</span>
          <h3>Pink Evening Dress</h3>
          <p>$410.00</p>
        </div>
      </div>
    </div>
  );
};
export default Signature;
