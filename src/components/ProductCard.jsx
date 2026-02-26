import orderIcon from "../assets/order-icon.png";

function ProductCard({ name, weight, price, image }) {
  const phoneNumber = "919786211976";

  const message = `Hi! I would like to order 1 ${name} priced at ₹${price}.`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <div className="product-card tilt-card">
      <img src={image} alt={name} className="product-img" />
      <h3>{name}</h3>
      <p>{weight}</p>
      <div className="card-bottom">
        <span className="price">₹{price}</span>
        <a href={whatsappURL} className="order-btn">
          <img src={orderIcon} alt="Order" className="order-icon" />
          Order
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
