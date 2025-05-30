import React from 'react';
import './Book.jsx';

const Book = ({ title, image, description }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-image" />
      <h3 className="book-title">{title}</h3>
      <p className="book-description">{description}</p>
    </div>
  );
};

export default Book;
