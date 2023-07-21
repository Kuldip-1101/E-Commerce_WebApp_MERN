
import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mr-2">Contact Us</h1>
          <MdEmail className="text-4xl text-blue-600" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <div className="flex items-center mb-2">
              <MdEmail className="text-xl text-blue-600 mr-2" />
              <p className="text-gray-800">Email: info@hellskitchen.com</p>
            </div>
            <div className="flex items-center mb-2">
              <MdPhone className="text-xl text-blue-600 mr-2" />
              <p className="text-gray-800">Phone: +1 (555) 123-4567</p>
            </div>
            <div className="flex items-center mb-4">
              <MdLocationOn className="text-xl text-blue-600 mr-2" />
              <p className="text-gray-800">Address: 2212 Ice Cream Lane, New York, USA</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-800 font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-600"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-600"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 font-bold mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-600 resize-none"
                  name="message"
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
