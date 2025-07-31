import React, { useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <div className="overflow-x-hidden min-h-screen bg-white relative">
    
      <div className="bg-gray-700 text-white flex items-center px-4 py-7 gap-x-6 text-base">
        <span className="font-bold text-xl ml-5 ">Eflyer</span>

        <div className="flex items-center gap-3 text-gray-300 whitespace-nowrap ml-5">
          <img src="/images/devices.png" alt="Devices" className="h-5" />
        </div>

        <img src="/images/234x60.gif" alt="Ad" className="h-13 ml-auto" />

        <button className="ml-4 bg-gray-800 px-3 py-2 rounded hover:bg-gray-600">Ad Space</button>

        <button className="ml-2 bg-gray-800 px-3 py-2 rounded flex items-center gap-1 hover:bg-gray-600">
          <img src="/images/purchase.png" alt="purchase" className="h-4" />
          Go Back to Download
        </button>

        <button className="ml-2 bg-gray-800 px-3 py-2 rounded flex items-center gap-1 hover:bg-gray-600">
          <img src="/images/cross.png" alt="Cancel" className="h-4" />
          Remove iframe
        </button>
      </div>

      
      <nav className="bg-black py-5 px-6 ">
        <ul className="flex gap-10 text-white text-l font-medium ml-25">
          <li><a href="#" className="hover:text-orange-500">Best Sellers</a></li>
          <li><a href="#" className="hover:text-orange-500">Gift ideas</a></li>
          <li><a href="#" className="hover:text-orange-500">New Releases</a></li>
          <li><a href="#" className="hover:text-orange-500">Today's Deals</a></li>
          <li><a href="#" className="hover:text-orange-500">Customer Services</a></li>
        </ul>
      </nav>

      
      <div className="relative">
        <img src="/images/banner-bg.png" alt="Banner" className="w-full h-auto object-cover" />
        <img src="/images/logo.png" className="absolute top-6 left-1/2 transform -translate-x-1/2 h-12 z-10" />

      
        <div className="absolute top-31 left-145 transform -translate-x-1/2 -translate-y-1/2 flex  bg-white rounded overflow-hidden z-10">
          <input
            type="text"
            className="px-10 py-3 w-72 outline-none"
            placeholder="Search this blog"
          />
          <button className="bg-orange-500 text-white px-4 hover:bg-orange-400">
            <i className="fas fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

 


     
      {!sidebarOpen && (
        <button onClick={() => setSidebarOpen(true)} className="absolute top-66 left-15 z-50  p-2 ">
          <img src="/images/toggle-icon.png" alt="Toggle" className="h-12 w-12" />
        </button>
      )}

     
      {sidebarOpen && (
        <div className="absolute top-40 left-0 w-60 h-100 bg-black text-white p-5 shadow-lg z-50">
          <button onClick={() => setSidebarOpen(false)} className=" hover:text-orange-500 text-2xl mb-4 float-right">✖</button>
          <h2 className="text-xl mb-4"></h2>
          <ul className="space-y-6">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">Fashion</a></li>
            <li><a href="#" className="hover:text-orange-500">Electronics</a></li>
            <li><a href="#" className="hover:text-orange-500">Jewellery</a></li>
          </ul>
        </div>
      )}

      
      <div className="absolute top-63 m-4 ml-40">
        <button onClick={() => setCategoryOpen(!categoryOpen)} className="bg-gray-800 text-white px-6 py-4 rounded hover:bg-gray-700">
          All Category ▼
        </button>
        {categoryOpen && (
          <ul className="absolute bg-white shadow rounded w-48 mt-2 text-black z-10">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Action</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Another action</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Something else here</li>
          </ul>
        )}
      </div>

     
      <div className="absolute top-65 m-4 left-210">
        <button onClick={() => setLanguageOpen(!languageOpen)} className="bg-white text-black px-4 py-2 rounded ">
          English ▼
        </button>
        {languageOpen && (
          <ul className="absolute bg-white shadow rounded w-40 mt-2 text-black z-10">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Urdu</li>
          </ul>
        )}
      </div>

     
      <div className="flex gap-4 m-5">
        <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-700">
          <img src="/images/purchase.png" alt="purchase" className="h-4" />
          Cart
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-700">
          <i className="fas fa-user"></i>
          Cart
        </button>
      </div>
    </div>
  );
}


export default App;
