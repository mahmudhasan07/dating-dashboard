"use client"
import React from 'react';
import { useState } from "react";
import Lists from './Lists';


const listings = [
    {
        id: 1,
        title: "Long Drive",
        description:
            "Ullam quasi nobis magnam repellendus...",
        image: "/long-drive.jpg",
        date: "14:05 05-11-2023",
        author: "Olivia Rhye",
        email: "olivia@untitledui.com",
    },
    {
        id: 2,
        title: "Watching Movie",
        description:
            "Ullam quasi nobis magnam repellendus...",
        image: "/watching-movie.jpg",
        date: "14:05 05-11-2023",
        author: "Olivia Rhye",
        email: "olivia@untitledui.com",
    },
    {
        id: 3,
        title: "Voluptas Velit Dolorum",
        description:
            "Ullam quasi nobis magnam repellendus...",
        image: "/cityscape.jpg",
        date: "14:05 05-11-2023",
        author: "Olivia Rhye",
        email: "olivia@untitledui.com",
    },
];

const fun = [
    {
        "id": 7,
        "title": "Amusement Park",
        "description": "A day filled with thrilling rides and fun games at the amusement park.",
        "image": "/amusement-park.jpg",
        "date": "11:30 25-05-2023",
        "author": "Rachel Green",
        "email": "rachel@untitledui.com"
    },
    {
        "id": 8,
        "title": "Karaoke Night",
        "description": "Sing your heart out and enjoy a fun-filled karaoke night with friends.",
        "image": "/karaoke-night.jpg",
        "date": "21:00 10-04-2023",
        "author": "Michael Johnson",
        "email": "michael@untitledui.com"
    }
]

const romantic = [
    {
        "id": 5,
        "title": "Sunset Beach Walk",
        "description": "A romantic evening stroll along the beach with golden sunsets.",
        "image": "/sunset-beach.jpg",
        "date": "18:15 14-07-2023",
        "author": "Sophia Adams",
        "email": "sophia@untitledui.com"
    },
    {
        "id": 6,
        "title": "Candlelight Dinner",
        "description": "Enjoy a cozy candlelight dinner at a fine dining restaurant.",
        "image": "/candlelight-dinner.jpg",
        "date": "20:00 05-06-2023",
        "author": "William Scott",
        "email": "william@untitledui.com"
    }
]

const adventure = [
    {
        "id": 3,
        "title": "Skydiving",
        "description": "Feel the rush of freefalling from thousands of feet above the ground.",
        "image": "/skydiving.jpg",
        "date": "16:45 22-09-2023",
        "author": "Emily Stone",
        "email": "emily@untitledui.com"
    },
    {
        "id": 4,
        "title": "Jungle Trekking",
        "description": "Explore dense forests and discover wildlife on this adventurous trek.",
        "image": "/jungle-trek.jpg",
        "date": "08:20 30-08-2023",
        "author": "Liam Brown",
        "email": "liam@untitledui.com"
    }
]


const tabs = ['Listed Places', 'Adventure', 'Romantic', 'Fun']

const ListPlaces = () => {

    const [active, setActive] = useState("Listed Places");

    const render = () => {
        switch (active) {
            case "Listed Places":
                return <Lists listings={listings}></Lists>
            case "Adventure":
                return <Lists listings={adventure}></Lists>
            case "Romantic":
                return <Lists listings={romantic}></Lists>
            case "Fun":
                return <Lists listings={fun}></Lists>

        }
    }

    return (
        <div className="max-w-7xl mx-auto p-4">
            <nav className="flex space-x-4 border-b pb-2 mb-4 justify-center">
                {tabs.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(category)}
                        className={`px-4 py-2 font-semibold ${active === category ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600 hover:text-blue-500"}`}
                    >
                        {category}
                    </button>
                ))}
            </nav>

            <div>
                {
                    render()
                }
            </div>

        </div>
    );
};

export default ListPlaces;