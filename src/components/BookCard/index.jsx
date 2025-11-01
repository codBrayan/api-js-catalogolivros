import React from 'react';
import './style.css'; 

function BookCard({ title, author, coverImage }) {
  return (
    <div className="book-card-container">
      <h3>{title}</h3>
      <img src={coverImage} alt={`Capa do livro ${title}`} />
      <p>{author}</p>
    </div>
  );
}

export default BookCard;