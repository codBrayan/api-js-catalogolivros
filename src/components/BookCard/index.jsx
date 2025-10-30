import React from 'react';
import './style.css'; 

function BookCard({ title, author, coverImage }) {
  return (
    <div className="book-card-container">
      <img src={coverImage} alt={`Capa do livro ${title}`} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

export default BookCard;