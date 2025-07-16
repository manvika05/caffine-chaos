import React from 'react';
import { FaCoffee, FaHeart, FaAward, FaUsers, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import Jordan from '../assets/2.jpg'
import founders from '../assets/founders.jpg'
import Map from '../assets/Map.jpg'

const About = () => {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & Head Barista",
      bio: "World Barista Championship finalist with 10+ years crafting exceptional coffee experiences.",
      specialty: "Espresso Art",
      photo:`${Jordan}`
    },
    {
      name: "Jordan Lee",
      role: "Co-Founder & Pastry Chef",
      bio: "Le Cordon Bleu trained pastry chef specializing in French patisserie techniques.",
      specialty: "Viennoiserie",
      photo:`${Jordan}`
    },
    {
      name: "Taylor Chen",
      role: "Head Roaster",
      bio: "Direct trade relationships with coffee farms across Ethiopia, Colombia, and Guatemala.",
      specialty: "Single-Origin Roasts",
      photo:`${Jordan}`
    }
  ];

  const milestones = [
    { year: "2025", event: "Caffeine & Chaos founded in a small downtown space" },
    { year: "2026", event: "Featured in 'Top 10 New Cafés' by Coffee Magazine" },
    { year: "2027", event: "Expanded to current flagship location" },
    { year: "2028", event: "Won Best Café Design at Hospitality Awards" },
    { year: "Present", event: "Serving 500+ customers daily with 4.9/5 average rating" }
  ];

  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-black/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-400 mb-6 tracking-wider">OUR STORY</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where passion for perfection meets the art of coffee craftsmanship
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 bg-gray-900 border border-amber-900/30">
            {/* Placeholder for founders image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <img src={founders} alt="Founders Photo" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-6 tracking-wider">
              THE BEGINNING
            </h2>
            <p className="text-gray-300 mb-4">
              In 2025, childhood friends Alex and Jordan transformed their shared obsession with coffee into Caffeine & Chaos. What began as a modest coffee cart serving single-origin pour overs quickly evolved into a movement.
            </p>
            <p className="text-gray-300 mb-6">
              We revolutionized the local coffee scene by introducing light roast specialty coffees when dark, bitter roasts dominated the market. Our insistence on direct trade relationships and small-batch roasting set new standards.
            </p>
            <div className="flex items-center gap-2 text-amber-400">
              <FaCoffee />
              <span className="font-medium">First location: 123 Elegance Street</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-8 tracking-wider">
            OUR PHILOSOPHY
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-amber-400 text-3xl mx-auto mb-4" />,
                title: "Passion",
                text: "Every cup reflects our relentless pursuit of coffee perfection"
              },
              {
                icon: <FaAward className="text-amber-400 text-3xl mx-auto mb-4" />,
                title: "Quality",
                text: "Only the top 2% of specialty grade beans make our cut"
              },
              {
                icon: <FaUsers className="text-amber-400 text-3xl mx-auto mb-4" />,
                title: "Community",
                text: "We exist to create meaningful connections through coffee"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 border border-gray-800 hover:border-amber-500/30 transition duration-300">
                {item.icon}
                <h3 className="text-xl font-medium text-amber-400 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-12 text-center tracking-wider">
            MEET OUR TEAM
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto bg-gray-800 border border-amber-900/30 rounded-full mb-6 overflow-hidden">
                  {/* Team member photo placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <img src={member.photo} alt={member.name} />
                  </div>
                </div>
                <h3 className="text-2xl text-amber-400 font-medium mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-3">{member.role}</p>
                <p className="text-gray-300 mb-2">{member.bio}</p>
                <p className="text-amber-400 text-sm">Specialty: {member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-12 text-center tracking-wider">
            OUR JOURNEY
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-amber-900/50 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 p-6 border ${index % 2 === 0 ? 'border-l-2 border-amber-400 text-right' : 'border-r-2 border-amber-400'} border-gray-800 bg-black/50`}>
                    <div className={`absolute top-1/2 w-4 h-4 rounded-full bg-amber-400 ${index % 2 === 0 ? '-right-2' : '-left-2'}`}></div>
                    <h3 className="text-xl text-amber-400 mb-1">{milestone.year}</h3>
                    <p className="text-gray-300">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-6 tracking-wider">
              VISIT US
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-amber-400 mt-1" />
                <div>
                  <p className="font-medium">123 Elegance Street</p>
                  <p>Coffee District, City CC 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaRegClock className="text-amber-400" />
                <div>
                  <p className="font-medium">Hours:</p>
                  <p>Monday-Friday: 7am - 10pm</p>
                  <p>Saturday-Sunday: 8am - 11pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 bg-gray-900 border border-amber-900/30">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <img src={Map} alt="Location Map" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;