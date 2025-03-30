"use client";
import { useState } from "react";

const UploadForm = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleImageUpload = (e: any) => {
        const file = e.target.files[0];
        if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
            setImage(file);
        } else {
            alert("Only PNG and JPG files are acceptable");
        }
    };

    return (
        <div className=" mx-auto p-6 bg-gray-100 rounded-lg  shadow-md min-h-screen">
            <h2 className="text-xl font-semibold mb-4">Upload an Image of Place or Idea</h2>
            <div className="border-dashed border-2 border-gray-300 p-10 text-center bg-white rounded-lg mb-4 ">
                <input type="file" accept="image/png, image/jpeg" className="hidden" id="fileUpload" onChange={handleImageUpload} />
                <label htmlFor="fileUpload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                        <span className="text-gray-500">📂 Drag and drop image here</span>
                        <small className="text-gray-400">Only PNG and JPG files would be acceptable</small>
                    </div>
                </label>
            </div>
            {image && <p className="text-sm text-green-600">File selected: {image}</p>}
            <label  className="text-lg font-semibold">Title</label>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <label  className="text-lg font-semibold">Category</label>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            >
                <option value="">Select Category</option>
                <option value="Romantic">Romantic</option>
                <option value="Adventure">Adventure</option>
                <option value="Nature">Nature</option>
            </select>
            <label className="text-lg font-semibold">User Rating</label>
            <input
                type="text"
                placeholder="Rating"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <label className="text-lg font-semibold">Open Hours</label>
            <input
                type="text"
                placeholder="Open Hours"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <label className="text-lg font-semibold">Description</label>
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4 h-32"
            ></textarea>
            <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">Next</button>
        </div>
    );
};

export default UploadForm;
