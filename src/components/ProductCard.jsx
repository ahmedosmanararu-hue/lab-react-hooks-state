import React from 'react'
import styles from '../styles/ProductCard.module.css'

function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{
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
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    >
      {/* Product Image */}
      <div style={{
        width: '100%',
        height: '180px',
        marginBottom: '12px',
        borderRadius: '6px',
        overflow: 'hidden',
        backgroundColor: 'var(--card-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <h3 style={{ marginBottom: '8px', marginTop: '0' }}>{product.name}</h3>
      <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '8px' }}>
        ${product.price.toFixed(2)}
      </p>
      <p style={{ fontSize: '14px', color: 'var(--text-color)', opacity: 0.7, marginBottom: '12px' }}>
        {product.category}
      </p>
      <button 
        onClick={() => onAddToCart(product)}
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
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductCard;