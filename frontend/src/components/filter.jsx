import React, { useState, useEffect } from 'react';

// Sample book data for genre filtering
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

const Filter = ({ onFilterChange }) => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");

    useEffect(() => {
        // Extract unique genres from booksData
        const uniqueGenres = Array.from(new Set(booksData.map(book => book.genre)));
        setGenres(uniqueGenres);
    }, []);

    const handleChange = (event) => {
        const genre = event.target.value;
        setSelectedGenre(genre);
        onFilterChange(genre); // Notify parent component of the selected genre
    };

    return (
        <div className="filter">
            <label htmlFor="genre-filter">Filter by Genre:</label>
            <select
                id="genre-filter"
                value={selectedGenre}
                onChange={handleChange}
            >
                <option value="">All Genres</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
