import axios from 'axios';
import SemCapa from '../assets/sem-capa.svg';

const api = axios.create({
    baseURL: 'https://openlibrary.org'
});

export const getBooks = async () => {
    try {
        const response = await api.get('/search.json?q=java');
        // Filtrando apenas os dados que precisamos da API
        const filteredBooks = response.data.docs.map(book => ({
            title: book.title,
            author: book.author_name ? book.author_name[0] : 'Autor Desconhecido',
            coverImage: book.cover_i 
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                : SemCapa
        }));
        return filteredBooks;
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        throw error;
    }
};

export default api;