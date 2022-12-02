function createTitle(title) {
  return "The " + title;  
}

function buildMainCharacter(name, age, pronouns) {
    var character = {
      name: name,
      age: age,
      pronouns: pronouns

    };
    return character
}

function saveReview(newReview, reviewsArray){
  if (!reviewsArray.includes(newReview)) {
    return reviewsArray.push(newReview);
  }
}

function calculatePageCount(title){
  return title.length * 20
}

function writeBook(title, bookCharacter, genre){
  var book = {
    title: title,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return book;
}

function editBook(book){
  return book.pageCount *= .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}