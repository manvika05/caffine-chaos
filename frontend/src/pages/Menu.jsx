import React from 'react';
import { FaLeaf, FaFire, FaStar, FaRegClock } from 'react-icons/fa';

const Menu = () => {
  // Menu categories
  const menuCategories = [
    {
      title: "Artisan Coffee",
      description: "Single-origin beans roasted to perfection",
      items: [
        { name: "Espresso", description: "Rich and intense single shot", price: "$3.50", popular: true },
        { name: "Doppio", description: "Double shot of espresso", price: "$4.50" },
        { name: "Americano", description: "Espresso with hot water", price: "$4.00" },
        { name: "Pour Over", description: "Ethiopian Yirgacheffe", price: "$5.50", special: true },
        { name: "Cold Brew", description: "16-hour steeped smoothness", price: "$5.00" },
      ]
    },
    {
      title: "Signature Lattes",
      description: "Crafted with house-made syrups",
      items: [
        { name: "Vanilla Bean Latte", description: "Madagascar vanilla", price: "$5.75", popular: true },
        { name: "Honey Cinnamon Latte", description: "Local wildflower honey", price: "$6.00" },
        { name: "Lavender Mocha", description: "Organic lavender infusion", price: "$6.25", special: true },
        { name: "Salted Caramel Latte", description: "House-made caramel", price: "$6.00" },
        { name: "Matcha Latte", description: "Ceremonial grade matcha", price: "$5.50" },
      ]
    },
    {
      title: "Desserts & Pastries",
      description: "Freshly baked daily",
      items: [
        { name: "Croissant", description: "Classic French butter", price: "$3.75", popular: true },
        { name: "Pain au Chocolat", description: "Valrhona dark chocolate", price: "$4.50" },
        { name: "Tiramisu", description: "Espresso-soaked ladyfingers", price: "$7.50", special: true },
        { name: "Macarons (3pc)", description: "Seasonal flavors", price: "$5.00" },
        { name: "Flourless Chocolate Cake", description: "Gluten-free indulgence", price: "$6.50" },
      ]
    },
    {
      title: "Light Bites",
      description: "Perfect pairings with coffee",
      items: [
        { name: "Avocado Toast", description: "Sourdough, heirloom tomatoes", price: "$8.50", popular: true },
        { name: "Quiche Lorraine", description: "Daily selection", price: "$7.00" },
        { name: "Granola Parfait", description: "House-made granola, Greek yogurt", price: "$6.50" },
        { name: "Ham & Cheese Croissant", description: "Black forest ham, Gruyère", price: "$6.75" },
      ]
    },
    {
      title: "Specialty Drinks",
      description: "Unique creations",
      items: [
        { name: "Affogato", description: "Vanilla gelato with espresso", price: "$6.50", special: true },
        { name: "Turkish Coffee", description: "Traditional preparation", price: "$5.00" },
        { name: "Spiced Chai Latte", description: "House-blended spices", price: "$5.25" },
        { name: "Iced Spanish Latte", description: "Condensed milk, cinnamon", price: "$6.00", popular: true },
      ]
    }
  ];

  return (
    <div className="bg-black text-gray-200 min-h-screen"> 
      {/* Menu Hero */}
      <section className="relative py-24 bg-black/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-400 mb-4 tracking-wider">OUR MENU</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafted with premium ingredients and served with passion
          </p>
        </div>
      </section>

      {/* Menu Legend */}
      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-amber-400" /> Popular
        </div>
        <div className="flex items-center gap-2 text-sm">
          <FaLeaf className="text-green-400" /> Vegan Option
        </div>
        <div className="flex items-center gap-2 text-sm">
          <FaRegClock className="text-blue-300" /> Brewed to Order
        </div>
        <div className="flex items-center gap-2 text-sm">
          <FaFire className="text-red-400" /> Seasonal Special
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto px-4 pb-20">
        {menuCategories.map((category, index) => (
          <section key={index} className="mb-16 last:mb-0">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-serif text-amber-400 mb-2">{category.title}</h2>
              <p className="text-gray-400">{category.description}</p>
              <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-4"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className={`p-6 border border-gray-800 hover:border-amber-500/30 transition duration-300 ${item.popular ? 'bg-black/50' : ''}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium text-amber-400 flex items-center gap-2">
                        {item.name}
                        {item.popular && <FaStar className="text-amber-400 text-sm" />}
                        {item.special && <FaFire className="text-red-400 text-sm" />}
                      </h3>
                      <p className="text-gray-400 mt-1">{item.description}</p>
                    </div>
                    <span className="text-amber-400 font-medium">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Menu Note */}
      <div className="container mx-auto px-4 pb-20 max-w-4xl text-center text-gray-400 border-t border-gray-800 pt-10">
        <p className="mb-4">
          *Please inform your server of any food allergies. Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness.
        </p>
        <p>
          *Prices subject to change. 18% service charge may be added to parties of 6 or more.
        </p>
      </div>
    </div>
  );
};

export default Menu;