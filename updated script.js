let library = [];

function addBook(title, author, owned) {
  library.push({ title, author, owned });
}

function displayBooks() {
  let bookListElement = document.getElementById('bookList');
  bookListElement.innerHTML = ''; // Clear existing content
  
  library.forEach(book => {
    let bookItem = document.createElement('div');
    bookItem.textContent = `${book.title} by ${book.author}`;
    bookListElement.appendChild(bookItem);
  });
}

// Function to generate a random book
function generateRandomBook() {
  const genres = ['Science Fiction', 'Fantasy', 'Romance', 'Thriller',];
  const authors = ['Sarah J Maas', 'Jay Kristoff', 'Fredrick Backman', 'Katerine Center', 'Krista Ritchi', 'Freya North', 'Kristen Ciccarelli', 'Alli Earnest'];

  const randomGenre = genres[Math.floor(Math.random() * genres.length)];
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  const randomTitle = `${randomGenre} Book by ${randomAuthor}`;
  const owned = Math.random() < 0.5; // Randomly assign ownership

  return { title: randomTitle, author: randomAuthor, owned };
}

// Function to generate and add a random book to the library
function addRandomBook() {
  const randomBook = generateRandomBook();
  addBook(randomBook.title, randomBook.author, randomBook.owned);
  displayBooks(); // Update the displayed books
}

// Example usage
addRandomBook();
addRandomBook();
addRandomBook();