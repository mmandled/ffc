const books = [
    {
        title: "Moby-Dick",
        authorName: "Herman Melville",
        releaseYear: 1851
    },
    {
        title: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        releaseYear: 1925
    },
    {
        title: "1984",
        authorName: "George Orwell",
        releaseYear: 1949
    },
    {
        title: "The Catcher in the Rye",
        authorName: "J.D. Salinger",
        releaseYear: 1951
    },
    {
        title: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        releaseYear: 1960
    }
];


function sortByYear(book1, book2){
    if(book1.releaseYear < book2.releaseYear) return -1;
    else if(book1.releaseYear > book2.releaseYear) return 1;
    else return 0;
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950).sort(sortByYear);