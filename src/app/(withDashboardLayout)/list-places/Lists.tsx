/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { motion } from "framer-motion";
const Lists = ({listings} : {listings: any}) => {

    console.log(listings, "listings");
    

    return (
        <div className="space-y-6">
            {listings?.map((listing : any) => (
                <motion.div
                    key={listing.id}
                    className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md"
                    whileHover={{ scale: 1.02 }}
                >
                    <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full md:w-1/3 h-48 object-cover"
                    />
                    <div className="p-4 flex-1">
                        <h2 className="text-xl font-semibold">{listing.title}</h2>
                        <p className="text-gray-600 text-sm">{listing.date}</p>
                        <p className="mt-2 text-gray-700">{listing.description}</p>
                        <div className="mt-4 flex items-center space-x-2">
                            <span className="font-medium">{listing.author}</span>
                            <span className="text-blue-500">{listing.email}</span>
                        </div>
                    </div>
                    <div className="p-4 flex items-center justify-center">
                        <button className="bg-red-500 text-white px-6 py-2 rounded-lg">Review</button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Lists;