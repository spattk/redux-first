import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'

class BookList extends Component {

    renderList = () => {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className='list-group-item'>
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state) {

    //Whatever is returned from this will appear as props in the BookList container
    return {
        books: state.books
    };
}

//anything returned from this will be props to the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called the result should be passed to all of our reducers
    // It works through the dispatch which takes all the actions and spits it out to all the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Promote BookList from component to Container - it needs to know about the dispatch method, selectBook. Make 
// it available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

