import React, { useState, useEffect } from "react";
import axios from "axios";

// API endpoint for fetching books
const API_BASE_URL = "https://bookbaazar-c8rl.onrender.com"; // Adjust this based on your backend

const Books = ({ userName }) => {
    // State to hold the books, loading status, and error
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch books when the component mounts
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/books/`); // Ensure this matches your API endpoint
                setBooks(response.data); 
                // Fetches books from your FastAPI backend
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    // Display a loading message while fetching
    if (loading) return <p>Loading...</p>;
    // Display error message if any error occurs
    if (error) return <p>Error: {error}</p>;

    // Rendering the fetched books
    return (
        <div className="shop page-bg">
            <h1>Welcome, {userName ? userName : "User"}</h1>
            <h4>Explore the Latest Book Collection</h4>
            <div className="cards">
                {books.map((book) => (
                    <div key={book.id} className="card">
                        <img
                            src={book.imageUrl}
                            alt={book.title}
                            className="card-image"
                        />
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-description">
                            {book.description}
                        </p>
                        <p className="card-price">{book.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;
