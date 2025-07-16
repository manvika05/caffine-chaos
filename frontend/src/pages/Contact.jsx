import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We're open Monday to Friday from 7am to 10pm, and Saturday to Sunday from 8am to 11pm."
    },
    {
      question: "Do you take reservations?",
      answer: "Yes, we accept reservations for parties of 2 or more. You can book through our website or by calling us directly."
    },
    {
      question: "Is there parking available?",
      answer: "We have limited street parking available. There's also a paid parking garage two blocks away on Market Street."
    },
    {
      question: "Do you offer gluten-free or vegan options?",
      answer: "Yes! We have several gluten-free pastries and vegan milk alternatives including oat, almond, and soy milk."
    },
    {
      question: "Can I host a private event at your cafe?",
      answer: "Absolutely! We offer private bookings after hours. Please contact us with your event details for availability and pricing."
    }
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would send the form data to your backend here
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  // Toggle accordion
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Contact Hero */}
      <section className="relative py-24 bg-black/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-400 mb-4 tracking-wider">CONTACT US</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you - questions, feedback, or just to say hello
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container  mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row justify-center w-auto gap-16 mb-12">
          
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-black/80 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-amber-400 mb-8 tracking-wider">SEND A MESSAGE</h2>
            
            {isSubmitted ? (
              <div className="bg-amber-900/20 border border-amber-400 p-6 text-center">
                <h3 className="text-xl text-amber-400 mb-2">Thank You!</h3>
                <p className="text-gray-300">Your message has been sent. We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 border border-amber-400 text-amber-400 hover:bg-amber-400/10 font-medium py-2 px-6 rounded-sm transition duration-300"
                >
                  Send Another Message
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
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
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

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-gray-900 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} focus:border-amber-400 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none transition`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-gray-700'} focus:border-amber-400 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none transition`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-500 text-black font-medium py-3 px-8 rounded-sm transition duration-300 border border-amber-700 w-full md:w-auto"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black/80">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-12 text-center tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-800 overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left bg-black/50 hover:bg-black/70 transition duration-300"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl font-medium text-amber-400">{faq.question}</h3>
                  {activeAccordion === index ? (
                    <FaChevronUp className="text-amber-400" />
                  ) : (
                    <FaChevronDown className="text-amber-400" />
                  )}
                </button>
                <div 
                  className={`px-6 pb-6 pt-0 bg-black/30 ${activeAccordion === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;