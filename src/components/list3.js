
import React, { Component } from 'react'

import City from './city'


class list3 extends Component {
    render() {

        const {myCity} = this.props

        return (
            <div className = "row d-flex justify-content-around">

              {

                myCity.map(newCity => {

                    console.log(newCity)

                    return (
                       <City
                         key={newCity.id}
                         title={newCity.title}
                       city = {newCity.city}
                       year = {newCity.year}
                       rating = {newCity.rating}
                       image = {newCity.image}
                       /> 
                    )

                })

              }      


            </div>
        )
    }
}

export default list3;