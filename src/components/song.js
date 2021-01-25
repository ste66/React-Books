
import React, { Component } from 'react'

import {Card,Button} from 'react-bootstrap'

class song extends Component {
    state =  {
        isVisible :true,
        title:"Song",
       
    };

     // ! FUNCTION: ==============
     myOnClickEvent = (e) => {
        this.setState({

            isVisible : !this.state.isVisible,
            title:"Song",
        
        });
    };
    
    render() {
        const {title,song,year,rating,image} = this.props;
        const {isVisible} = this.state
        return (
            <div className= " mb-5">
              <div     
                    style={

                    isVisible 
                       ? {backgroundColor:"aqua", color:"black"}
                       : {backgroundColor:"red", color:"white"}
                    }
                    >
                <Card.Title style={{cursor:"pointer"}} onClick={this.myOnClickEvent} >{title}</Card.Title>
                        
                {
                            isVisible ? (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{song}</Card.Title>
                                <Card.Text>
                                Released {year}
                                </Card.Text>
                                <Button variant="warning">{rating}</Button>
                            </Card.Body>
                           
                </Card>
                ) : null 
                        }
                </div>
               
            </div>
        )
    }
}
           

export default song;