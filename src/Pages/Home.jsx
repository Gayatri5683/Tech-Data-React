import React from 'react'
import { Link } from 'react-router-dom';
import tech from '../Data/TechData.json';


const Home = () => {
  return (
    <div className='p-4'>
        <div className='bg-red-300 text-black p-5 mt-10 text-center text-2xl font-bold'>
            Welcome to Our Tech Heaven
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
            {tech.slice(0,4).map((TechData) => (
                <div key={TechData.id} className='border p-4 rounded shadow'>
                    <img src={TechData.image} alt={TechData.title} className='w-full h-40 objecct-cover'/>
                    <h2 className='text-lg font-semibold mt-2'>{TechData.title}</h2>
                    <h3 className='text-lg font-semibold '>{TechData.brand}</h3>
                    <p className='text-sm text-gray-600'>₹{TechData.price}</p>
                </div>
                ))}
        </div>
        <div className='text-center mt-6'>
            <Link to='/techData' className='bg-red-400 text-black px-4 py-2 rounded'>
            View All Data
            </Link>
        </div>
    </div>
  )
}

export default Home