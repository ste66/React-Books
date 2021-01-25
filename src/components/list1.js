import React, { Component } from 'react'

import Book from './book'


class list1 extends Component {
    render() {

        const {myBook} = this.props

        return (
            <div className = "row d-flex justify-content-around">

              {

                myBook.map(newBook => {

                    console.log(newBook)

                    return (
                       <Book
                         key={newBook.id}
                         title={newBook.title}
                       book = {newBook.book}
                       year = {newBook.year}
                       rating = {newBook.rating}
                       image = {newBook.image}

                       /> 
                    )

                })

              }      


            </div>
        )
    }
}

export default list1;
