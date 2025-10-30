import './style.css'
import BookCard from '../../components/BookCard'
import img1984 from '../../assets/1984.jpg'
import imgDuna from '../../assets/duna.jpeg'

function Home() {

  return (
    <div className='container'>

      <h1>Catálogo de Livros</h1>

      <div className="books-list">
        <BookCard
          title="1984"
          author="George Orwell"
          coverImage={img1984}
        />
        <BookCard
          title="Duna"
          author="Frank Herbert"
          coverImage={imgDuna}
        />
        <BookCard
          title="1984"
          author="George Orwell"
          coverImage={img1984}
        />
        <BookCard
          title="Duna"
          author="Frank Herbert"
          coverImage={imgDuna}
        />
        <BookCard
          title="1984"
          author="George Orwell"
          coverImage={img1984}
        />
        <BookCard
          title="Duna"
          author="Frank Herbert"
          coverImage={imgDuna}
        />

      </div>
    </div>
  )
}

export default Home
