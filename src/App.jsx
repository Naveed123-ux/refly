import React, { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: "$899", image: "/images/laptop-img.png", category: "Electronics" },
    { id: 2, name: "T-Shirt", price: "$29", image: "/images/tshirt-img.png", category: "Fashion" },
    { id: 3, name: "Mobile Phone", price: "$599", image: "/images/mobile-img.png", category: "Electronics" },
    { id: 4, name: "Jhumka Earrings", price: "$45", image: "/images/jhumka-img.png", category: "Jewellery" },
    { id: 5, name: "Women's Dress", price: "$79", image: "/images/women-clothes-img.png", category: "Fashion" },
    { id: 6, name: "Computer", price: "$1299", image: "/images/computer-img.png", category: "Electronics" }
  ];

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="overflow-x-hidden min-h-screen bg-gray-50 relative">
      {/* Top Header */}
      <div className="bg-gray-700 text-white flex items-center px-4 py-3 gap-x-6 text-sm">
        <span className="font-bold text-xl ml-5">Eflyer</span>
        
        <div className="flex items-center gap-3 text-gray-300 whitespace-nowrap ml-5">
          <img src="/images/devices.png" alt="Devices" className="h-5" />
          <span>Multi-device support</span>
        </div>

        <img src="/images/234x60.gif" alt="Ad" className="h-12 ml-auto" />

        <button className="ml-4 bg-gray-800 px-3 py-2 rounded hover:bg-gray-600 transition-colors">
          Ad Space
        </button>

        <button className="ml-2 bg-gray-800 px-3 py-2 rounded flex items-center gap-1 hover:bg-gray-600 transition-colors">
          <img src="/images/purchase.png" alt="purchase" className="h-4" />
          Go Back to Download
        </button>

        <button className="ml-2 bg-gray-800 px-3 py-2 rounded flex items-center gap-1 hover:bg-gray-600 transition-colors">
          <img src="/images/cross.png" alt="Cancel" className="h-4" />
          Remove iframe
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-black py-4 px-6">
        <ul className="flex gap-10 text-white text-base font-medium justify-center">
          <li><a href="#" className="hover:text-orange-500 transition-colors">Best Sellers</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Gift Ideas</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">New Releases</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Today's Deals</a></li>
          <li><a href="#" className="hover:text-orange-500 transition-colors">Customer Service</a></li>
        </ul>
      </nav>

      {/* Banner Section */}
      <div className="relative">
        <img src="/images/banner-bg.png" alt="Banner" className="w-full h-96 object-cover" />
        <img src="/images/logo.png" className="absolute top-6 left-1/2 transform -translate-x-1/2 h-16 z-10" />

        {/* Search Bar */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex bg-white rounded-lg overflow-hidden shadow-lg z-10">
          <input
            type="text"
            className="px-6 py-4 w-80 outline-none text-gray-700"
            placeholder="Search for products..."
          />
          <button className="bg-orange-500 text-white px-6 hover:bg-orange-600 transition-colors">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 left-6 flex gap-4">
          {/* Toggle Sidebar */}
          {!sidebarOpen && (
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-70 transition-all"
            >
              <img src="/images/toggle-icon.png" alt="Menu" className="h-8 w-8" />
            </button>
          )}

          {/* Category Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setCategoryOpen(!categoryOpen)} 
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              All Categories
              <i className={`fas fa-chevron-down transition-transform ${categoryOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {categoryOpen && (
              <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-48 text-black z-20 overflow-hidden">
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b">Electronics</li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b">Fashion</li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Jewellery</li>
              </ul>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setLanguageOpen(!languageOpen)} 
              className="bg-white text-black px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              English
              <i className={`fas fa-chevron-down transition-transform ${languageOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {languageOpen && (
              <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-32 text-black z-20 overflow-hidden">
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Urdu</li>
              </ul>
            )}
          </div>
        </div>

        {/* Cart Buttons */}
        <div className="absolute bottom-6 right-6 flex gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors shadow-lg">
            <i className="fas fa-shopping-cart"></i>
            Cart ({cartItems})
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors shadow-lg">
            <i className="fas fa-user"></i>
            Account
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="fixed top-0 left-0 w-80 h-full bg-black text-white p-6 shadow-2xl z-50 transform transition-transform">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button 
                onClick={() => setSidebarOpen(false)} 
                className="text-2xl hover:text-orange-500 transition-colors"
              >
                ✖
              </button>
            </div>
            <ul className="space-y-6 text-lg">
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-3">
                <i className="fas fa-home"></i> Home
              </a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-3">
                <i className="fas fa-tshirt"></i> Fashion
              </a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-3">
                <i className="fas fa-laptop"></i> Electronics
              </a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-3">
                <i className="fas fa-gem"></i> Jewellery
              </a></li>
            </ul>
          </div>
        </>
      )}

      {/* Products Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Featured Products</h2>
        <p className="text-gray-600 text-center mb-12">Discover our best-selling items</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                  <button 
                    onClick={addToCart}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-cart-plus"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/images/footer-logo.png" alt="Eflyer" className="h-12 mb-4" />
              <p className="text-gray-400">Your trusted online shopping destination for electronics, fashion, and jewelry.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jewellery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home & Garden</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Eflyer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;