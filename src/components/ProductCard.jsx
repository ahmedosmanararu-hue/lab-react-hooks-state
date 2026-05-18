import React from 'react'
import styles from '../styles/ProductCard.module.css'

function ProductCard({ product, onAddToCart }) {
  return (
    <div 
      data-testid={`product-${product.id}`}
      role="button"
      onClick={() => onAddToCart(product)}
      style={{
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px',
        width: '220px',
        textAlign: 'center',
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-color)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer'
      }}
    >
      <h3 style={{ marginBottom: '8px' }}>{product.name}</h3>
      <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '8px' }}>
        ${product.price.toFixed(2)}
      </p>
      <p style={{ fontSize: '14px', color: 'var(--text-color)', opacity: 0.7, marginBottom: '12px' }}>
        {product.category}
      </p>
      <button 
        onClick={(event) => {
          event.stopPropagation();
          onAddToCart(product);
        }}
        style={{
          padding: '8px 16px',
          backgroundColor: 'var(--primary-color)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%'
        }}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductCard;