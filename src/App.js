

import './App.css';

import React, { Component } from 'react'

import Navbar from './components/navbar'
import Jumbotron from './components/jumbotron'

/* This part not use in MAP imported into List1,2,3 respectively===========*/
/*import Book from './components/book'
import Song from './components/song'
import City from './components/city'*/

/*Import Books */
import Becoming1 from './images/becoming1.jpg' 
import Dad from './images/dad.jpg'
 import Dream from './images/dream.jpg'

/*Import Songs */
  import Kelly from './images/kelly.jpg' 
 import MariaCarey from './images/mariaCarey.jpg'
 import EdSheeran from './images/edSheeran.png'

/*Import Cities */
import Rügen from './images/rügen.jpg' 
import Paris  from './images/paris.jpg'
import London from './images/london.jpg'

/*Part used for Map */
import List1 from "./components/list1";
import List2 from "./components/list2";
import List3 from "./components/list3";

 class App extends Component {
  state = {
    book :[
      {
        id : 1,
        title:"Book",
        book :"Becoming",
        year : 2018,
        rating : 4.5,
        image : Becoming1
       
 
      },
      {
        id : 2,
        title:"Book",
        book :"Rich Dad Poor Dad",
        year : 1997,
        rating : 4.7,
        image : Dad


      },
      {
        id : 3,
        title:"Book",
        book :"I have a dream",
        year : 1968,
        rating : 4.8,
        image : Dream
    
     
      },
    ],

    song :[
      {
        id : 4,  
        title:"Song",
        song :"I Believe I Can Fly",
        year : 1998,
        rating : 4.8,
        image : Kelly
       
  
      },
      {
        id : 5,
        title:"Song",
        song :"Butterfly",
        year : 1997,
        rating : 4.7,
        image : MariaCarey
  
  
      },
      {
        id : 6,
        title:"Song",
        song :"Perfect",
        year : 2017,
        rating : 4.8,
        image : EdSheeran
    
     
      },
    ],
    city :[
      {
        id : 7,
        title:"City",
        city :"Rügen",
        year : 2018,
        rating : 1,
        image : Rügen
       
  
      },
      {
        id : 8,
        title:"City",
        city :"Paris",
        year : 2014,
        rating : 3,
        image : Paris
  
  
      },
      {
        id : 9,
        title:"City",
        city :"London",
        year : 2017,
        rating : 2,
        image : London
    
     
      },
    ],

};

  render() {
    return (

      <div className="App" >
        
          <Navbar/>
          
          <Jumbotron />
      
          {/*State Method=================here*/}
          {/* 1st Row To see your cards side by side, add a row 
          <div className="row d-flex justify-content-around">

          <Book book={this.state.book[0].book} year={this.state.book[0].year} rating={this.state.book[0].rating} image={Becoming}  />
          
          <Book book={this.state.book[1].book} year={this.state.book[1].year} rating={this.state.book[1].rating} image={Dad} />
          
            <Book book={this.state.book[2].book} year={this.state.book[2].year} rating={this.state.book[2].rating} image={Dream}/>
           </div>*/}
 
          <List1 myBook={this.state.book} />
     

      
          {/*State Method=================here*/}
          <Jumbotron/>
          
          {/* 2nd  row To see your cards side by side, add a row */}
           {/* <div className="row d-flex justify-content-around">

          <Song song={this.state.song[0].song} year={this.state.song[0].year} rating={this.state.song[0].rating} image={Kelly}  />

          <Song song={this.state.song[1].song} year={this.state.song[1].year} rating={this.state.song[1].rating} image={ MariaCarey} />

          <Song song={this.state.song[2].song} year={this.state.song[2].year} rating={this.state.song[2].rating} image={EdSheeran}/>

          </div>*/} 
          <List2 mySong={this.state.song} />

          {/*State Method=================here*/}
            <Jumbotron/>
          {/*  3rd Row To see your cards side by side, add a row */}
          {/* <div className="row d-flex justify-content-around">
                <City city={this.state.city[0].city} year={this.state.city[0].year} rating={this.state.city[0].rating} image={Rügen}  />
                <City city={this.state.city[1].city} year={this.state.city[1].year} rating={this.state.city[1].rating} image={ Paris}/>
                <City city={this.state.city[2].city} year={this.state.city[2].year} rating={this.state.city[2].rating} image={London}/>
      </div>*/}

          <List3 myCity={this.state.city} />

        

      </div>
    )
  }
}
export default App;