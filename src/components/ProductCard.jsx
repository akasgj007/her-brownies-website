import orderIcon from "../assets/order-icon.png";

function ProductCard({ name, weight, price }) {
  const phoneNumber = "919786211976"; 

const message = `Hi! I would like to order 1 ${name} priced at ₹${price}.`;
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="product-card tilt-card">
      <h3>{name}</h3>
      <p>{weight}</p>
      <span>₹{price}</span>
      <a
  href={whatsappURL}
  target="_blank"
  rel="noopener noreferrer"
  className="order-btn"
>
  <img src={orderIcon} alt="Order" className="order-icon" />
  Place Order
</a>
    </div>
  );
}

export default ProductCard;
