import React from 'react';
import coffeeImage from '../assets/coffee.webp';
import {Link} from  'react-router-dom';
import team from '../assets/team.webp';

const Home = () => {
  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={coffeeImage} 
          alt="Artisanal coffee" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-amber-400 tracking-wider">
            CAFFEINE & CHAOS
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Where exceptional coffee meets refined elegance in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/menu" 
              className="bg-amber-600 hover:bg-amber-500 text-black font-medium py-3 px-8 rounded-sm transition duration-300 border border-amber-700"
            >
              EXPLORE OUR MENU
            </Link>
            <Link 
              to="/reservation" 
              className="bg-transparent hover:bg-black/30 text-amber-400 font-medium py-3 px-8 rounded-sm transition duration-300 border border-amber-400"
            >
              BOOK A TABLE
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-4 tracking-wider">
            OUR SIGNATURE OFFERINGS
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Artisanal Coffee",
              description: "Single-origin beans roasted to perfection and brewed with precision.",
              icon: "☕"
            },
            {
              title: "Gourmet Pastries",
              description: "Freshly baked daily by our award-winning pastry chef.",
              icon: "🥐"
            },
            {
              title: "Evening Elixirs",
              description: "Craft cocktails with coffee-infused spirits for the perfect nightcap.",
              icon: "🍸"
            }
          ].map((item, index) => (
            <div key={index} className="bg-black/50 p-8 border border-amber-900/30 hover:border-amber-500/50 transition duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-serif text-amber-400 mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-6 tracking-wider">
              THE CAFFEINE & CHAOS STORY
            </h2>
            <p className="text-gray-300 mb-4">
              Founded in 2025, Caffeine & Chaos began as a passion project between two coffee enthusiasts with a vision for creating a space where quality meets creativity.
            </p>
            <p className="text-gray-300 mb-6">
              Today, we've grown into a destination for those who appreciate the artistry behind every cup, served in an atmosphere of refined comfort.
            </p>
            <Link 
              to="/about" 
              className="inline-block border border-amber-400 text-amber-400 hover:bg-amber-400/10 font-medium py-2 px-6 rounded-sm transition duration-300"
            >
              LEARN MORE
            </Link>
          </div>
          <div className="relative h-96 bg-gray-900 border border-amber-900/30">
            {/* Placeholder for about image - you would add your own */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <img src={team} alt="Team photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-4 tracking-wider">
            WHAT OUR GUESTS SAY
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "The best coffee experience I've had in the city. The attention to detail is remarkable.",
              author: "— Sarah J., Food Critic"
            },
            {
              quote: "More than just a cafe, it's a sanctuary for coffee lovers who appreciate the finer things.",
              author: "— Michael T., Regular Guest"
            }
          ].map((item, index) => (
            <div key={index} className="border border-amber-900/30 p-8 hover:border-amber-500/50 transition duration-300">
              <p className="text-gray-300 italic text-lg mb-4">"{item.quote}"</p>
              <p className="text-amber-400">{item.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-amber-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-6 tracking-wider">
            JOIN US FOR AN UNFORGETTABLE EXPERIENCE
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking for your morning ritual or an evening retreat, we welcome you to discover the Caffeine & Chaos difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/reservation" 
              className="bg-amber-600 hover:bg-amber-500 text-black font-medium py-3 px-8 rounded-sm transition duration-300 border border-amber-700"
            >
              RESERVE A TABLE
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-black/30 text-amber-400 font-medium py-3 px-8 rounded-sm transition duration-300 border border-amber-400"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;