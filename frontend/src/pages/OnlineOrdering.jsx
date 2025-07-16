import React, { useState } from 'react';
import { FaFilter, FaSearch, FaPlus, FaMinus, FaShoppingBasket, FaTimes } from 'react-icons/fa';

const OnlineOrdering = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: "Espresso",
      category: "coffee",
      price: 3.50,
      description: "Rich and intense single shot",
      isPopular: true
    },
    {
      id: 2,
      name: "Pour Over",
      category: "coffee",
      price: 5.50,
      description: "Ethiopian Yirgacheffe",
      isSpecial: true
    },
    {
      id: 3,
      name: "Vanilla Bean Latte",
      category: "latte",
      price: 5.75,
      description: "Madagascar vanilla",
      isPopular: true
    },
    {
      id: 4,
      name: "Lavender Mocha",
      category: "latte",
      price: 6.25,
      description: "Organic lavender infusion"
    },
    {
      id: 5,
      name: "Croissant",
      category: "pastry",
      price: 3.75,
      description: "Classic French butter",
      isPopular: true
    },
    {
      id: 6,
      name: "Pain au Chocolat",
      category: "pastry",
      price: 4.50,
      description: "Valrhona dark chocolate"
    },
    {
      id: 7,
      name: "Tiramisu",
      category: "dessert",
      price: 7.50,
      description: "Espresso-soaked ladyfingers"
    },
    {
      id: 8,
      name: "Avocado Toast",
      category: "food",
      price: 8.50,
      description: "Sourdough, heirloom tomatoes",
      isPopular: true
    }
  ];

  // State management
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [showCart, setShowCart] = useState(false);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch(sortOption) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

  // Cart functions
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter(item => item.id !== productId);
      }
    });
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  // Categories for filter
  const categories = ['all', 'coffee', 'latte', 'pastry', 'dessert', 'food'];

  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Ordering Hero */}
      <section className="relative py-24 bg-black/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-400 mb-4 tracking-wider">ORDER ONLINE</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enjoy our premium offerings from the comfort of your home
          </p>
        </div>
      </section>

      {/* Ordering Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          {/* Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search menu..."
              className="w-full bg-gray-900 border border-gray-700 focus:border-amber-400 px-4 py-2 pl-10 text-gray-200 placeholder-gray-500 focus:outline-none transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Filter and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <FaFilter className="text-amber-400" />
              <select
                className="bg-gray-900 border border-gray-700 focus:border-amber-400 px-4 py-2 text-gray-200 focus:outline-none transition"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <select
              className="bg-gray-900 border border-gray-700 focus:border-amber-400 px-4 py-2 text-gray-200 focus:outline-none transition"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setShowCart(true)}
            className="relative bg-amber-600 hover:bg-amber-500 text-black font-medium py-2 px-6 rounded-sm transition duration-300 border border-amber-700 flex items-center gap-2"
          >
            <FaShoppingBasket />
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {filteredProducts.map(product => (
            <div key={product.id} className="border border-gray-800 hover:border-amber-500/30 transition duration-300 bg-black/50">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-amber-400">
                    {product.name}
                    {product.isPopular && <span className="ml-2 text-xs bg-amber-600 text-black px-2 py-1 rounded">Popular</span>}
                    {product.isSpecial && <span className="ml-2 text-xs bg-red-600 text-white px-2 py-1 rounded">Special</span>}
                  </h3>
                  <span className="text-amber-400 font-medium">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-amber-600 hover:bg-amber-500 text-black font-medium py-2 px-4 rounded-sm transition duration-300 border border-amber-700 flex items-center justify-center gap-2"
                >
                  <FaPlus /> Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl text-amber-400 mb-4">No items found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowCart(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-gray-900 shadow-xl">
            <div className="h-full flex flex-col">
              {/* Cart Header */}
              <div className="border-b border-amber-900/30 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-serif text-amber-400">Your Order</h2>
                <button onClick={() => setShowCart(false)} className="text-gray-400 hover:text-amber-400">
                  <FaTimes />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <FaShoppingBasket className="mx-auto text-4xl text-gray-600 mb-4" />
                    <p className="text-gray-400">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-start border-b border-gray-800 pb-4">
                        <div>
                          <h3 className="text-lg text-amber-400">{item.name}</h3>
                          <p className="text-gray-400">${item.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-amber-400 transition"
                          >
                            <FaMinus />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => addToCart(item)}
                            className="text-gray-400 hover:text-amber-400 transition"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              <div className="border-t border-amber-900/30 p-6">
                <div className="flex justify-between mb-6">
                  <span className="text-gray-400">Total Items:</span>
                  <span className="text-amber-400">{getTotalItems()}</span>
                </div>
                <div className="flex justify-between text-xl mb-6">
                  <span className="text-gray-300">Total:</span>
                  <span className="text-amber-400 font-medium">${getTotalPrice()}</span>
                </div>
                <button
                  className={`w-full py-3 px-6 rounded-sm font-medium transition duration-300 ${cart.length === 0 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-500 text-black border border-amber-700'}`}
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineOrdering;