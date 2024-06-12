import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Task() {
    const [productsData, setProductsData] = useState([]);

    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/products/`;

    const fetchData = async () => {
        console.log('fetching...');
        const response = await axios.get(endpoint);
        console.log(response);
        const { data } = response;
        setProductsData(data);
        console.log(data);
        return data;
    };

    const postData = async () => {
        const name = 'test x';
        const description = 'test x description';
        const body = { name, description };

        const response = await axios.post(endpoint, body);
        console.log(response);
        return response.data;
    };

    const handleSendData = async () => {
        const newData = await postData();
        // You can optionally refetch data here if you want to update the list immediately after posting new data
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <ul className="list-disc list-inside bg-gray-100 p-4 rounded-md shadow-md">
                {productsData.map(el => (
                    <li key={el.id} className="py-2 border-b border-gray-300 last:border-none">
                        {el.name}
                    </li>
                ))}
            </ul>
            <button
                onClick={handleSendData}
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600"
            >
                Create Data
            </button>
        </div>
    );
}

export default Task;
