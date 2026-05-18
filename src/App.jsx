import { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

// Updated product data to match test expectations
const initialProducts = [
  { id: 1, name: 'Apple', price: 1.99, category: 'Fruits' },
  { id: 2, name: 'Banana', price: 0.99, category: 'Fruits' },
  { id: 3, name: 'Milk', price: 3.99, category: 'Dairy' },
  { id: 4, name: 'Cheese', price: 4.99, category: 'Dairy' },
  { id: 5, name: 'Bread', price: 2.49, category: 'Bakery' },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Apply dark mode to body
  if (darkMode) {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
  }

  // Get unique categories
  const categories = ['All', ...new Set(initialProducts.map(p => p.category))];

  // Filter products by category
  const filteredProducts = selectedCategory === 'All'
    ? initialProducts
    : initialProducts.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container">
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px',
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '2px solid var(--border-color)'
      }}>
        <h1>🛍️ My Shop</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div style={{
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: 'var(--card-bg)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        flexWrap: 'wrap'
      }}>
        <label htmlFor="category" style={{ fontWeight: 'bold' }}>
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color)',
            cursor: 'pointer'
          }}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '20px',
      }}>
        <div>
          <h2 style={{ marginBottom: '15px' }}>
            Products {selectedCategory !== 'All' && `in ${selectedCategory}`}
          </h2>
          <ProductList 
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </div>
        
        <div>
          <Cart 
            cartItems={cartItems}
            onRemoveFromCart={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        </div>
      </div>
    </div>
  );
}

export default App;