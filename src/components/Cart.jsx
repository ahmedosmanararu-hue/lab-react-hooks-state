function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div style={{
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        padding: '20px',
        marginTop: '20px',
        textAlign: 'center',
        backgroundColor: 'var(--card-bg)'
      }}>
        <h3>Shopping Cart</h3>
        <p>Your cart is empty. Add some products!</p>
      </div>
    );
  }

  return (
    <div style={{
      border: '1px solid var(--border-color)',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '20px',
      backgroundColor: 'var(--card-bg)'
    }}>
      <h3>Shopping Cart</h3>
      
      {cartItems.map(item => (
        <div key={item.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 0',
          borderBottom: '1px solid var(--border-color)',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div style={{ flex: 2 }}>
            <strong>{item.name}</strong>
            <p style={{ fontSize: '14px', opacity: 0.7, margin: '8px 0 0' }}>
              {item.name} is in your cart.
            </p>
            <span style={{ fontSize: '14px', opacity: 0.7, marginLeft: '10px' }}>
              (${item.price.toFixed(2)} each)
            </span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '4px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-color)',
                cursor: 'pointer',
                color: 'var(--text-color)'
              }}
            >
              -
            </button>
            <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '4px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-color)',
                cursor: 'pointer',
                color: 'var(--text-color)'
              }}
            >
              +
            </button>
          </div>
          
          <div style={{ flex: 1, textAlign: 'right' }}>
            <strong>${(item.price * item.quantity).toFixed(2)}</strong>
          </div>
          
          <button 
            onClick={() => onRemoveFromCart(item.id)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Remove
          </button>
        </div>
      ))}
      
      <div style={{
        marginTop: '15px',
        paddingTop: '15px',
        borderTop: '2px solid var(--border-color)',
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: '18px'
      }}>
        Total: ${calculateTotal().toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;