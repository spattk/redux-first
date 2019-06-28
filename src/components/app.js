import React, { Component } from 'react';
import BookList from '../container/book-list';
import BookDetails from '../container/book-details';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}
