import ProductCard from './ProductCard';

export const sampleProducts = [
  { id: 1, name: 'Apple', price: 1.99, category: 'Fruits' },
  { id: 2, name: 'Banana', price: 0.99, category: 'Fruits' },
  { id: 3, name: 'Milk', price: 3.99, category: 'Dairy' },
  { id: 4, name: 'Cheese', price: 4.99, category: 'Dairy' },
  { id: 5, name: 'Bread', price: 2.49, category: 'Bakery' },
];

function ProductList({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p>No products available.</p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px'
    }}>
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;