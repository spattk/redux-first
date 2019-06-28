import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookDetails extends Component {
    render(){

        if(!this.props.book){
            return <div>Select a book to get started !</div>
        }

        return (
            <div>
                <h3>Details for : </h3>
                <div>Title : {this.props.book.title}</div>
                <div>Pages : {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){

    return {
        //refer index.js in reducers for state's key
        book : state.activeBook
    }
}

export default connect (mapStateToProps)(BookDetails);