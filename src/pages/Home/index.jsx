import './style.css'
import BookCard from '../../components/BookCard'
import { useState, useEffect } from 'react'
import { getBooks } from '../../services/api'

function Home() {

  //
  const [books, setBooks] = useState([]);

    useEffect(() => {
    // async marca uma função como assíncrona (que pode esperar por operações)
    async function loadBooks() {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error("Erro ao carregar livros:", error);
      }
    }
    loadBooks();
  }, []); 

  return (
    <div className='container'>
      <h1>Catálogo de Livros</h1>

      <div className="books-list">
        {books.map((book) => (
          <div key={book.title}>
            <BookCard
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
