import React, { useState } from 'react';

const netflixPlans = [
    {
        name: 'basic plan',
        item: 'resolution 720p HD'
    },
    {
        name: 'Standard plan',
        item: 'resolution 1080p Full HD'
    },
    {
        name: 'premium plan',
        item: 'Resolution 4K (ultra HD) + HDR'
    },
];

const Plans = () => {
    const [subscribedIndex, setSubscribedIndex] = useState(null);

    const handleSubscribe = (index) => {
        setSubscribedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='flex flex-col space-y-8'>
            {netflixPlans.map((plan, index) => (
                <div key={index} className='flex justify-between items-center mt-5'>
                    <div>
                        <h1 className='text-xl font-medium capitalize'>{plan.name}</h1>
                        <p className='text-gray-400 text-sm capitalize'>{plan.item}</p>
                    </div>
                    <div>
                        <button
                            className={`text-white px-3 py-1 ${subscribedIndex === index ? 'bg-gray-500' : 'bg-red-500'}`}
                            onClick={() => handleSubscribe(index)}
                        >
                            {subscribedIndex === index ? 'Subscribed' : 'Subscribe'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Plans;
