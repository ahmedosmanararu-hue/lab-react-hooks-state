import ProductCard from './ProductCard';

function ProductList({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p>No products found in this category.</p>
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