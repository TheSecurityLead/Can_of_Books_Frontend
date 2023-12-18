import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class BestBooks extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    // Make a GET request to fetch books from your server
    fetch('https://lab11-fnlk.onrender.com') // Update the URL to match your server
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data });
      })
      .catch((error) => console.error('Error fetching books:', error));
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <h2>Best Books</h2>
        {books.length > 0 ? (
          <Carousel>
            {books.map((book) => (
              <Carousel.Item key={book._id}>
                <img
                  className="d-block w-100"
                  src={book.imageUrl} // Replace with the actual image URL from your book data
                  alt={book.title}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>No books available.</p>
        )}
      </div>
    );
  }
}

export default BestBooks;