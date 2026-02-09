const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {

  test('gets titles', () => {
    const books = [
      { title: 'Book', author: 'Name' },
      { title: 'Book2', author: 'Name2' }
    ];
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });

  test('Test empty array', () => {
    const books = [];
    expect(getTheTitles(books)).toBe('No books');
  });

});

