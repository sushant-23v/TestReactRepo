export default function Promotions() {
  const dummyPromotions = [
    { id: 1, title: "20% off on your first order!", description: "Sign up now and enjoy a discount on your first purchase." },
    { id: 2, title: "Free Shipping on orders over $50", description: "Shop now and enjoy free shipping on all orders above $50." },
    { id: 3, title: "Buy one get one free", description: "Limited time offer! Buy one item and get another free." },
  ];

  return (
    <div>
      <h2>Current Promotions</h2>
      <ul>
        {dummyPromotions.map(promotion => (
          <li key={promotion.id}>
            <h3>{promotion.title}</h3>
            <p>{promotion.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}