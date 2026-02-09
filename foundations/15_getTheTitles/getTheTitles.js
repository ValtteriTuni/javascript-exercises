const getTheTitles = function(books) {
    if (books.length === 0) {return 'No books';}
    let arr = [];
    for(let book of books) {
        arr.push(book.title);
    }
    return arr;
};


// Do not edit below this line
module.exports = getTheTitles;
