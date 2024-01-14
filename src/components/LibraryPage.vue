<template>
  <div id="app" class="container mt-3">
    <h1>Книгарня</h1>

    <!-- Форма для збереження книг -->
    <form @submit.prevent="saveBook">
      <div class="form-group">
        <label for="title">Назва книги:</label>
        <input v-model="book.title" type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="author">Автор:</label>
        <input v-model="book.author" type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="genre">Жанр:</label>
        <input v-model="book.genre" type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="year">Рік видання:</label>
        <input v-model="book.year" type="number" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="pages">Кількість сторінок:</label>
        <input v-model="book.pages" type="number" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Зберегти книгу</button>
    </form>

    <hr>

    <!-- Виведення книг -->
    <div v-if="books.length === 0">Немає збережених книг.</div>
    <ul class="list-group" v-else>
      <li class="list-group-item" v-for="(book, index) in books" :key="index">
        {{ book.title }} ({{ book.year }}), Автор: {{ book.author }} - {{ book.genre }}
        <button class="btn btn-danger btn-sm float-right" @click="deleteBook(index)">Видалити</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        title: '',
        author: '',
        genre: '',
        year: null,
        pages: null,
      },
      books: [],
    };
  },
  methods: {
    saveBook() {
      // Збереження книги в localstorage
      this.books.push({ ...this.book });
      localStorage.setItem('books', JSON.stringify(this.books));

      // Очищення форми
      this.book = {
        title: '',
        author: '',
        genre: '',
        year: null,
        pages: null,
      };
    },
    deleteBook(index) {
      // Видалення книги з localstorage
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
    },
  },
  created() {
    // Завантаження збережених книг при запуску
    const savedBooks = localStorage.getItem('books');
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  },
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
}

h1 {
  color: #007bff;
}

form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.list-group {
  max-width: 400px;
  margin: 20px auto;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.btn-danger {
  background-color: #dc3545;
}

.btn-danger:hover {
  background-color: #bd2130;
}
</style>

