
import React, { Component } from 'react'

import {Card,Button} from 'react-bootstrap'

class city extends Component {
    state =  {
        isVisible :true,
        title:"City",
    };

     // ! FUNCTION: ==============
     myOnClickEvent = (e) => {
        this.setState({
                isVisible : !this.state.isVisible,
                title:"City",
        
        });
    };
    render() {
        const {title,city,rating,year,image} = this.props;
        const {isVisible} = this.state;

        return (
            <div className= " mb-5"> 
                 <div     
                    style={

                    isVisible 
                       ? {backgroundColor:"deeppink", color:"black"}
                       : {backgroundColor:"red", color:"white"}
                    }
                    >
                <Card.Title style={{cursor:"pointer"}} onClick={this.myOnClickEvent} >{title}</Card.Title>
                        
                {
                            isVisible ? (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{city}</Card.Title>
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
export default city;
