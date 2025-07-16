import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUserFriends, FaPhone, FaInfoCircle } from 'react-icons/fa';

const Reservation = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available time slots
  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
    '8:00 PM', '9:00 PM'
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would send the form data to your backend here
      console.log('Reservation submitted:', formData);
      setIsSubmitted(true);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Reservations Hero */}
      <section className="relative py-24 bg-black/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-400 mb-4 tracking-wider">RESERVATIONS</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserve your table for an exceptional coffee experience
          </p>
        </div>
      </section>

      {/* Reservations Content */}
      <div className="container mx-auto px-20 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Booking Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-amber-400 mb-8 tracking-wider">BOOK A TABLE</h2>
            
            {isSubmitted ? (
              <div className="bg-amber-900/20 border border-amber-400 p-8 text-center">
                <h3 className="text-2xl text-amber-400 mb-4">Reservation Confirmed!</h3>
                <p className="text-gray-300 mb-6">
                  Your table for {formData.guests} on {formData.date} at {formData.time} has been reserved.
                </p>
                <p className="text-gray-300 mb-6">
                  A confirmation has been sent to {formData.email}. Please arrive 5 minutes before your reservation time.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-amber-400 text-amber-400 hover:bg-amber-400/10 font-medium py-2 px-6 rounded-sm transition duration-300"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-700'} focus:border-amber-400 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none transition`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-700'} focus:border-amber-400 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none transition`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-gray-900 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} focus:border-amber-400 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none transition`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-gray-300 mb-2 flex items-center gap-2">
                      <FaCalendarAlt /> Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className={`w-full bg-gray-900 border ${errors.date ? 'border-red-500' : 'border-gray-700'} focus:border-amber-400 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none transition`}
                    />
                    {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-gray-300 mb-2 flex items-center gap-2">
                      <FaClock /> Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full bg-gray-900 border ${errors.time ? 'border-red-500' : 'border-gray-700'} focus:border-amber-400 px-4 py-3 text-gray-200 focus:outline-none transition`}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-gray-300 mb-2 flex items-center gap-2">
                    <FaUserFriends /> Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 focus:border-amber-400 px-4 py-3 text-gray-200 focus:outline-none transition"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                    <option value="8+">8+ people (contact us)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-gray-300 mb-2">Special Requests</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="3"
                    className="w-full bg-gray-900 border border-gray-700 focus:border-amber-400 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none transition"
                    placeholder="Allergies, accessibility needs, special occasions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-500 text-black font-medium py-3 px-8 rounded-sm transition duration-300 border border-amber-700 w-full md:w-auto"
                >
                  RESERVE NOW
                </button>
              </form>
            )}
          </div>

          {/* Reservation Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-amber-400 mb-8 tracking-wider">INFORMATION</h2>
            
            <div className="space-y-8">
              <div className="border border-amber-900/30 p-6">
                <h3 className="text-xl text-amber-400 mb-4 flex items-center gap-2">
                  <FaClock /> Hours
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span> <span>7am - 10pm</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday - Sunday:</span> <span>8am - 11pm</span>
                  </p>
                </div>
              </div>

              <div className="border border-amber-900/30 p-6">
                <h3 className="text-xl text-amber-400 mb-4 flex items-center gap-2">
                  <FaUserFriends /> Group Bookings
                </h3>
                <p className="text-gray-300 mb-4">
                  For parties of 8 or more, please call us directly to arrange your reservation.
                </p>
                <div className="flex items-center gap-2 text-amber-400">
                  <FaPhone />
                  <span>+1 (123) 456-7890</span>
                </div>
              </div>

              <div className="border border-amber-900/30 p-6">
                <h3 className="text-xl text-amber-400 mb-4 flex items-center gap-2">
                  <FaInfoCircle /> Policies
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span>Please arrive within 15 minutes of your reservation time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span>Large parties may have an 18% service charge added</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span>Cancellations require 24 hours notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span>Special requests are not guaranteed but we'll do our best</span>
                  </li>
                </ul>
              </div>

              <div className="border border-amber-900/30 p-6 bg-black/50">
                <h3 className="text-xl text-amber-400 mb-4">Private Events</h3>
                <p className="text-gray-300 mb-4">
                  Interested in booking our space after hours for a private event? We host everything from coffee tastings to intimate gatherings.
                </p>
                <a
                  href="/contact"
                  className="inline-block border border-amber-400 text-amber-400 hover:bg-amber-400/10 font-medium py-2 px-6 rounded-sm transition duration-300"
                >
                  INQUIRE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;