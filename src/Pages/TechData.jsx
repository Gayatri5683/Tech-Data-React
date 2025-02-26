import React from 'react'
import { Link } from 'react-router-dom';
import tech from '../Data/TechData.json';

const TechData = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Data Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tech.map((techData) =>/*  {            console.log(techData.id);
            return */ (
          <div /* to={`tech/${techData.id}`}  */
          key={techData._id} 
          className="border p-4 rounded shadow">
            <img src={techData.image} alt={techData.title} className="w-full h-40 object-cover" />
            <div className='p-4'>
                <h2 className="text-lg font-semibold mt-2">{techData.title}</h2>
                <h3 className='text-lg font-semibold '>{techData.brand}</h3>
                <p className="text-sm text-gray-600">₹{techData.price}</p>
            </div>
            <Link to={`/tech/${techData._id}`} className='bg-red-400 text-black px-4 py-2 rounded mt-4 block text-center'>
            View Details
            </Link>
          </div>
      
        ))}
      </div>
    </div>
  )
}

export default TechData