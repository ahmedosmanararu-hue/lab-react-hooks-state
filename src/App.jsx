import { useState, useEffect } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

// Product data directly in App.jsx (since no data file exists)
const initialProducts = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCR1Tc8LNiZTC9Ig9o06H62e7mTErls2OQppn_Nz8Zz8OVA-8ZPk62MpBC-vLkLGRMxmCDuOLjzKvvpzvMOye9kFU4alqXm3J8EAC7oA2WHDOM4SuKsq6IWQQ_WBHbY2n92HITUKEhQQ&usqp=CAc' },
  { id: 2, name: 'Smartphone', price: 699.99, category: 'Electronics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU2mfDm2JQ_tuu_rXDrr-YchLMbg18qHAIA&s' },
  { id: 3, name: 'Headphones', price: 149.99, category: 'Electronics', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEJ-33KY7GgCg_WfsA_FYeczGsLi5EEAj_FKSpLTBmurg1_8oANTqLxCJtxQL4x0Vk421Ju7qswoRy560CuEQ1jBDwkk3-vOhWY9pFZxWuenY5oJsBrMfEuB-n2A7udRFvyTZ8qg&usqp=CAc' },
  { id: 4, name: 'T-Shirt', price: 29.99, category: 'Clothing', image: 'data:image/jpeg;base64,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' },
  { id: 5, name: 'Jeans', price: 79.99, category: 'Clothing', image: 'data:image/jpeg;base64,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' },
  { id: 6, name: 'Sneakers', price: 89.99, category: 'Footwear', image: 'data:image/jpeg;base64,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' },
  { id: 7, name: 'Coffee Mug', price: 14.99, category: 'Accessories', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcstBzXiA0sU6WKGkbfs32nPEGw-AIJy9gs-PrbSDJM18yp68n_GUvaEcObL1OVQ5Oqf8VIU5tvETGwoPm8IrmzXcoLIl_fqtDucfk5864uONsdlWiizQ3LmbIvof7HqYW6H4gK2s&usqp=CAc' },
  { id: 8, name: 'Backpack', price: 49.99, category: 'Accessories', image: 'data:image/jpeg;base64,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' },
];

function App() {
  // Step 2: Dark Mode State
  const [darkMode, setDarkMode] = useState(false);

  // Step 3: Cart Items State
  const [cartItems, setCartItems] = useState([]);

  // Step 4: Category Filter State
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Apply dark mode using useEffect
  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [darkMode]);

  // Get unique categories
  const categories = ['All', ...new Set(initialProducts.map(p => p.category))];

  // Filter products by category
  const filteredProducts = selectedCategory === 'All'
    ? initialProducts
    : initialProducts.filter(product => product.category === selectedCategory);

  // Add item to cart
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

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Update item quantity
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

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container">
      {/* Header Section with Dark Mode Toggle */}
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
        <DarkModeToggle 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      {/* Step 4: Category Filter Dropdown */}
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
        
        {selectedCategory !== 'All' && (
          <span style={{ fontSize: '14px', opacity: 0.8 }}>
            Showing {filteredProducts.length} product(s) in {selectedCategory}
          </span>
        )}
      </div>

      {/* Main Content - Product List and Cart */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '20px',
      }}>
        {/* Products Section */}
        <div>
          <h2 style={{ marginBottom: '15px' }}>
            Products {selectedCategory !== 'All' && `in ${selectedCategory}`}
          </h2>
          <ProductList 
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </div>
        
        {/* Cart Section */}
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