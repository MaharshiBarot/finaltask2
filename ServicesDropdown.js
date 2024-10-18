import React, { useState } from 'react';
import { SERVICES_INFO } from './constants'; // Adjust the path as necessary
import './global.css'; // Import your global CSS file

const ServicesDropdown = () => {
    const [hoveredService, setHoveredService] = useState(null);

    return (
        <div className="relative">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ul className="list-none">
                {SERVICES_INFO.map(service => (
                    <li 
                        key={service.id}
                        onMouseEnter={() => setHoveredService(service.id)}
                        onMouseLeave={() => setHoveredService(null)}
                        className="relative cursor-pointer p-2 hover:bg-gray-100"
                    >
                        {service.name}
                        {hoveredService === service.id && (
                            <ul className={`absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10`}>
                                {service.text.description.map((desc, index) => (
                                    <li key={index} className="p-2 hover:bg-gray-200">
                                        <strong>{desc.main}</strong>: {desc.subDescription}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesDropdown;