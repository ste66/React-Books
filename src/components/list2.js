
import React, { Component } from 'react'

import Song from './song'


class list2 extends Component {
    render() {

        const {mySong} = this.props

        return (
            <div className ="row d-flex justify-content-around">

              {

                mySong.map(newSong => {

                    console.log(newSong)

                    return (
                       <Song
                         key={newSong.id}
                         title={newSong.title}
                       song = {newSong.song}
                       year = {newSong.year}
                       rating = {newSong.rating}
                       image = {newSong.image}

                       /> 
                    )

                })

              }      


            </div>
        )
    }
}

export default list2;
