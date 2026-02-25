function ProductCard({ name, weight, price }) {
  return (
    <div className="product-card tilt-card">
      <h3>{name}</h3>
      <p>{weight}</p>
      <span>₹{price}</span>
    </div>
  );
}

export default ProductCard;
