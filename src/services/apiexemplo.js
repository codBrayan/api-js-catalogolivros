const API_URL = 'https://api.example.com';

export async function fetchBooks() {
try {
    const response = await fetch(`${API_URL}/search.json?q=${query}`);

    if (!response.ok) {
      throw new Error('Erro ao buscar os livros. Status: ' + response.status);
    }
    const data = await response.json();

    const books = data.docs.map(book => {
      
      const coverImage = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : 'https://via.placeholder.com/200x300.png?text=Sem+Capa'; // Se não receber imagem, uma imagem placeholder

      return {
        title: book.title,
        author: book.author_name ? book.author_name.join(', ') : 'Autor desconhecido',
        coverImage: coverImage
      };
    });

    return books;

  } catch (error) {
    console.error("Falha ao buscar dados da API:", error);
    throw error; 
  }
}