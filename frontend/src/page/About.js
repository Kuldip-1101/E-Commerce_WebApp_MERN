
import React from 'react';
import { GiCook} from 'react-icons/gi';

const TeamMembers = [
  {
    name: 'John Doe',
    position: 'Founder & Chef',
    description: 'John is a culinary genius with a passion for creating unique flavors that leave customers craving more.',
  },
  {
    name: 'Jane Smith',
    position: 'Head Pastry Chef',
    description: "Jane's artistry and expertise in desserts have earned her accolades from customers and critics alike.",
  },
  // Add more team members as needed
];

const About = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center">
          <GiCook className="text-6xl text-red-600 mr-2" />
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Hell's Kitchen</h1>
          <GiCook className="text-6xl text-red-600 ml-2" />
        </div>
        <p className="text-gray-800 text-lg mb-6">
          At Hell's Kitchen, we are passionate about crafting exquisite ice cream flavors that elevate your dining experience. Our ice creams are made with the finest ingredients, offering a wide range of creamy classics and inventive novelties that cater to all taste buds.
        </p>
        <p className="text-gray-800 text-lg mb-6">
          From the moment we opened our virtual doors, our mission has been to delight and surprise our customers with every scoop. We believe that ice cream isn't just a treat; it's an experience that brings joy and memories to people of all ages.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TeamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.position}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
