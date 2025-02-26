import React from 'react'
import { useParams } from 'react-router-dom';
import tech from '../Data/TechData.json';
import { Link } from 'react-router-dom';

const TechDetails = () => {

    const { id } = useParams();
    const techData = tech.find((techData) => String(techData._id) === String(id));

    if (!techData) {
        return <p className='text-center'>Product Not Found</p>
    }
  return (
    <div className='container mx-auto p-4'>
        <div className=' rounded-lg shadow-lg'>
            <img src={techData.image} alt={techData.title} className='w-full h-80 object-cover'/>
            <div className='p-4'>
                <h2 className='text-2xl font-bold'>{techData.title}</h2>
                <h3 className='text-lg font-semibold'>Brand: {techData.brand}</h3>
                <p className='text-sm text-gray-600'>Price: ₹{techData.price}</p>
                <p className='mt-2'>{techData.description}</p>
                <p className='mt-4'>{techData.description || "No description available." }</p>
                </div>
                <div className='mt-6'>
                    <Link to='/' className='bg-red-400 text-black px-4 py-2 rounded'>Go Back</Link>
                </div>
        </div>
    </div>
  )
}

export default TechDetails