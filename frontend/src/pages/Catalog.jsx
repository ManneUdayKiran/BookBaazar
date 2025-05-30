import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique ID generation
import lovestoryImg from "../assets/lovestory.jpg";
import StarRating from "../components/Rating.jsx";
import sideimg from"../assets/sideimg.avif";
import cover from "../assets/image0.jpeg"
import Filter from '../components/filter.jsx';
import SearchBar from "../components/SearchBar.jsx";
// import selectedGenre

const API_BASE_URL = "https://bookbaazar-c8rl.onrender.com/books/";

const Dashboard = () => {
    const [books, setBooks] = useState([]);
    const [rating, setRating] = useState(0); // Initial rating set to 0
    // const [filteredBooks1, setFilteredBooks] = useState(books);
    const [selectedGenre, setSelectedGenre] = useState(""); // Initial value can be an empty string or any default genre


    const handleFilterChange = (selectedGenre) => {
        if (selectedGenre) {
            setFilteredBooks(books.filter(book => book.genre === selectedGenre));
        } else {
            setFilteredBooks(books);
            handleChange();
        }
    };

    const [formBook, setFormBook] = useState({
        id: null,
        title: "",
        description: "",
        imageUrl: "",
        price: "",
        author: "",
        genre: "",
        review: "", // Add review field
        rating: 0, // Add rating field
    });
    const [reviewForm, setReviewForm] = useState({
        user: "",
        rating: 0,
        comment: "",
    });
    const handleReviewChange = (e) => {
        setReviewForm({
            ...reviewForm,
            [e.target.name]: e.target.value,
        });
    };
    
    const submitReview = async () => {
        try {
            const updatedBook = {
                ...formBook,
                reviews: [...formBook.reviews, reviewForm],
            };
            await axios.put(`${API_BASE_URL}${formBook.id}/`, updatedBook);
            setBooks(books.map(book => book.id === formBook.id ? updatedBook : book));
            setReviewForm({ user: "", rating: 0, comment: "" });
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };
    
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchBooks();
        // addBooksToDatabase();
    }, []);

    const [filteredBooks, setFilteredBooks] = useState(books);

// This useEffect will handle filtering and searching
useEffect(() => {
    let filtered = books;

    if (searchQuery) {
        filtered = filtered.filter(book => {
            // Ensure book.title and book.author are strings
            const title = book.title ? book.title.toLowerCase() : '';
            const author = book.author ? book.author.toLowerCase() : '';
            return title.includes(searchQuery.toLowerCase()) ||
                   author.includes(searchQuery.toLowerCase());
        });
    }

    if (selectedGenre) {
        filtered = filtered.filter(book => book.genre === selectedGenre);
    }

    setFilteredBooks(filtered);
}, [searchQuery, selectedGenre, books]);


    

    // useEffect(() => {
    //     // Filter books based on search query and selected genre
    //     const filtered = books.filter(book =>
    //         (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         book.author.toLowerCase().includes(searchQuery.toLowerCase())) &&
    //         (selectedGenre ? book.genre === selectedGenre : true)
    //     );
    //     setFilteredBooks(filtered);
    // }, [searchQuery, selectedGenre, books]);

    // const fetchBooks = async () => {
    //     try {
    //         const response = await axios.get(API_BASE_URL);
    //         console.log("Raw fetched data:", response.data); // Log the raw data
    //         // Verify that each book has an ID
    //         response.data.forEach(book => console.log("Book ID:", book.id));
    //         setBooks(response.data); // Set the books state
    //     } catch (error) {
    //         console.error("Error fetching books:", error);
    //     }
    // };
    const booksData = [
        // Fantasy
        {
            title: "The Name of the Wind",
            description: "A young man's journey to become a legendary hero.",
            imageUrl: "https://m.media-amazon.com/images/I/81vpsIs58WL._AC_UY218_.jpg",
            price: "9.99",
            author: "Patrick Rothfuss",
            genre: "Fantasy",
        },
        {
            title: "A Game of Thrones",
            description: "The epic fantasy that inspired the hit TV series.",
            imageUrl: "https://m.media-amazon.com/images/I/91dSMhdIzTL._AC_UY218_.jpg",
            price: "11.99",
            author: "George R. R. Martin",
            genre: "Fantasy",
        },
        {
            title: "Mistborn: The Final Empire",
            description: "A unique fantasy world with an intriguing magic system.",
            imageUrl: "https://m.media-amazon.com/images/I/91-NVLCaURL._AC_UY218_.jpg",
            price: "10.99",
            author: "Brandon Sanderson",
            genre: "Fantasy",
        },
        {
            title: "The Way of Kings",
            description: "The first book in the epic Stormlight Archive series.",
            imageUrl: "https://m.media-amazon.com/images/I/81SzjKBw3tL._AC_UY218_.jpg",
            price: "12.99",
            author: "Brandon Sanderson",
            genre: "Fantasy",
        },
    
        // Science Fiction
        {
            title: "Dune",
            description: "A classic science fiction novel about politics and power.",
            imageUrl: "https://m.media-amazon.com/images/I/81Q9RXlrxnL._AC_UY218_.jpg",
            price: "14.49",
            author: "Frank Herbert",
            genre: "Science Fiction",
        },
        {
            title: "The Left Hand of Darkness",
            description: "A groundbreaking exploration of gender and society.",
            imageUrl: "https://m.media-amazon.com/images/I/91CWdruDbCL._AC_UY218_.jpg",
            price: "8.99",
            author: "Ursula K. Le Guin",
            genre: "Science Fiction",
        },
        {
            title: "Neuromancer",
            description: "A seminal cyberpunk novel that shaped the genre.",
            imageUrl: "https://m.media-amazon.com/images/I/81MBf7-vd3L._AC_UY218_.jpg",
            price: "9.89",
            author: "William Gibson",
            genre: "Science Fiction",
        },
        {
            title: "Snow Crash",
            description: "A fast-paced cyberpunk adventure with a unique premise.",
            imageUrl: "https://m.media-amazon.com/images/I/81pE+dhAwHL._AC_UY218_.jpg",
            price: "12.99",
            author: "Neal Stephenson",
            genre: "Science Fiction",
        },
    
        // Mystery/Thriller
        {
            title: "The Girl with the Dragon Tattoo",
            description: "A gripping thriller involving mystery and intrigue.",
            imageUrl: "https://m.media-amazon.com/images/I/71kmKzvJzsL._AC_UY218_.jpg",
            price: "9.99",
            author: "Stieg Larsson",
            genre: "Mystery/Thriller",
        },
        {
            title: "Gone Girl",
            description: "A psychological thriller with a shocking twist.",
            imageUrl: "https://m.media-amazon.com/images/I/81z5+fB+OnL._AC_UY218_.jpg",
            price: "10.89",
            author: "Gillian Flynn",
            genre: "Mystery/Thriller",
        },
        {
            title: "The Silent Patient",
            description: "A psychological thriller about a woman who stops speaking.",
            imageUrl: "https://m.media-amazon.com/images/I/81TZkfs-2TL._AC_UY218_.jpg",
            price: "12.99",
            author: "Alex Michaelides",
            genre: "Mystery/Thriller",
        },
        {
            title: "Big Little Lies",
            description: "A gripping tale of secrets and lies among a group of women.",
            imageUrl: "https://m.media-amazon.com/images/I/81t9VfNEJ-L._AC_UY218_.jpg",
            price: "10.49",
            author: "Liane Moriarty",
            genre: "Mystery/Thriller",
        },
    
        // Romance
        {
            title: "Pride and Prejudice",
            description: "A classic romance novel set in early 19th century England.",
            imageUrl: "https://m.media-amazon.com/images/I/91cW-bDuIHL._AC_UY218_.jpg",
            price: "7.99",
            author: "Jane Austen",
            genre: "Romance",
        },
        {
            title: "Me Before You",
            description: "A heart",
        },
            // Young Adult
    {
        title: "The Hunger Games",
        description: "A dystopian novel about a survival competition.",
        imageUrl: "https://m.media-amazon.com/images/I/61JfGcL2ljL._AC_UY218_.jpg",
        price: "8.99",
        author: "Suzanne Collins",
        genre: "Young Adult",
    },
    {
        title: "The Fault in Our Stars",
        description: "A moving romance between two teenagers with cancer.",
        imageUrl: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg",
        price: "10.99",
        author: "John Green",
        genre: "Young Adult",
    },
    {
        title: "Divergent",
        description: "A dystopian story about a society divided into factions.",
        imageUrl: "https://m.media-amazon.com/images/I/91VUP9bc1RL._AC_UY218_.jpg",
        price: "9.49",
        author: "Veronica Roth",
        genre: "Young Adult",
    },
    {
        title: "Six of Crows",
        description: "A thrilling heist story set in a fantasy world.",
        imageUrl: "https://m.media-amazon.com/images/I/91dSMhdIzTL._AC_UY218_.jpg",
        price: "11.29",
        author: "Leigh Bardugo",
        genre: "Young Adult",
    }
];
const addBooksToDatabase = async () => {
    try {
        for (let book of booksData) {
            // Populate the formBook state with book data
            const newBook = {
                title: book.title,
                description: book.description,
                imageUrl: book.imageUrl,
                price: book.price,
                author: book.author,
                genre: book.genre,
                review: "", // Initial review is empty
                rating: 0,  // Initial rating is 0
            };

            // Make a POST request to add the book to the database
            const response = await axios.post(API_BASE_URL, newBook);

            // Log success
            console.log("Book added:", response.data);
        }
        // Refresh the book list after adding all books
        fetchBooks();
    } catch (error) {
        console.error("Error adding books:", error);
    }
};


    
    const fetchBooks = async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            // Mock IDs for testing purposes
            const booksWithId = response.data.map((book, index) => ({
                ...book,
                id: index + 1, // This is a temporary fix, adjust according to your needs
            }));
            console.log("Fetched books with IDs:", booksWithId); // Log the response data
            setBooks(booksWithId);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };
    const createOrUpdateBook = async () => {
        try {
            let response;
            if (formBook.id) {
                // Update existing book
                response = await axios.put(`${API_BASE_URL}${formBook.id}/`, formBook);
                console.log("Update response:", response); // Check server response
                console.log(formBook.id);
            } else {
                // Create new book
                response = await axios.post(API_BASE_URL, formBook);
                console.log("Create response:", response); // Check server response
                // Use the ID from the server response
                setFormBook({
                    ...formBook,
                    id: response.data.id,
                });
            }
            fetchBooks(); // Refresh the list of books
            resetForm(); // Clear the form after the operation
            //  addBooksToDatabase();
        } catch (error) {
            console.error("Error saving book:", error);
        }
    };
    
    



    const deleteBook = async (id) => {
        try {
            const url = `${API_BASE_URL}${id}`;
            await axios.delete(url);

            // Update the state by removing the deleted book
            setBooks(books.filter((book) => book.id !== id));

            console.log(`Deleted book with ID ${id}`);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.log(`Book with ID ${id} does not exist in the backend.`);
                alert(`Book with ID ${id} was already deleted or does not exist.`);
                fetchBooks(); // Refetch books in case of desynchronization
            } else {
                console.error("Error deleting book:", error.response ? error.response.data : error.message);
            }
        }
    };

    const startUpdate = (book) => {
        setFormBook({
            id: book.id,
            title: book.title,
            description: book.description,
            imageUrl: book.imageUrl,
            price: book.price,
            author: book.author,
            genre: book.genre,
        });
    };

    const handleChange = (e) => {
        setFormBook({
            ...formBook,
            [e.target.name]: e.target.value,
        });
    };

    const resetForm = () => {
        setFormBook({
            id: null,
            title: "",
            description: "",
            imageUrl: "",
            price: "",
            author: "",
            genre: "",
        });
    };
    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };
    
    const handleFilterChange1 = (genre) => {
        setSelectedGenre(genre);
    };
    

    // Filter out books with undefined or null IDs
    // const filteredBooks = books.filter((book) => book.id);

    return (
        <div className="dashboard page-bg">
            <h1>Catalog</h1>
           <div className="filterclass">
           <Filter onFilterChange={handleFilterChange} />


           </div>
            {/* Search bar */}
            <div className="search-bar">
            <SearchBar onSearchChange={handleSearchChange} />
            </div>

            <div className="new-product-form island">
                <h5>{formBook.id ? "Update Book" : "Add New Book"}</h5>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formBook.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formBook.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={formBook.imageUrl}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={formBook.price}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={formBook.author}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    value={formBook.genre}
                    onChange={handleChange}
                />
                <div className="review-form">
   
</div> 

                
                <button onClick={createOrUpdateBook}>
                    {formBook.id ? "Update Book" : "Add Book"}
                </button>
            </div>

            {/* <div className="cards">
            {filteredBooks.map((book) => (
    <div key={book.id} className="card">
        <img
            src={book.imageUrl || cover} // Default image if URL is empty
            alt={book.title}
            className="card-image"
        />
        <h5 className="card-title">{book.title}</h5>
        <p className="card-description">{book.description}</p>
        <p className="card-price">{book.price}</p>
        <p className="card-author">Author: {book.author}</p>
        <p className="card-genre">Genre: {book.genre}</p>
        <StarRating
            rating={book.rating}
            onRatingChange={(newRating) => {
                const updatedBooks = books.map(b =>
                    b.id === book.id ? { ...b, rating: newRating } : b
                );
                setBooks(updatedBooks);
            }}
        />
        <div className="buttons-container">
            <button onClick={() => startUpdate(book)}>Update</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
    </div>
))}
</div>

        </div>
    );
};

export default Dashboard; */}
<div className="cards">
                {filteredBooks.map(book => (
                    <div key={book.id} className="card">
                        <img
                            src={book.imageUrl || cover} // Default image if URL is empty
                            alt={book.title}
                            className="card-image"
                        />
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-description">{book.description}</p>
                        <p className="card-price">{book.price}</p>
                        <p className="card-author">Author: {book.author}</p>
                        <p className="card-genre">Genre: {book.genre}</p>
                        <StarRating
                            rating={book.rating}
                            onRatingChange={(newRating) => {
                                const updatedBooks = books.map(b =>
                                    b.id === book.id ? { ...b, rating: newRating } : b
                                );
                                setBooks(updatedBooks);
                            }}
                        />
                        <button onClick={() => startUpdate(book)}>Edit</button>
                        <button onClick={() => deleteBook(book.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;