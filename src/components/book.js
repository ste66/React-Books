
import React, { Component } from 'react'

import {Card,Button} from 'react-bootstrap'

class book extends Component {
state =  {
    isVisible :true,
    title : "Book",


};
// ! FUNCTION: ==============
myOnClickEvent = (e) => {
    this.setState({
            isVisible : !this.state.isVisible,
            title : "Book",
        
    });
};

    
    render() {
        const {title,book,year,rating,image} = this.props;
        const {isVisible} = this.state;
        return (
            <div className=" mb-5 ">
            <div     
                    style={

                    isVisible 
                       ? {backgroundColor:"yellow", color:"black"}
                       : {backgroundColor:"red", color:"white"}
                    }
                    >
                <Card.Title style={{cursor:"pointer"}} onClick={this.myOnClickEvent} >{title}</Card.Title>
                        
                {
                            isVisible ? (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{book}</Card.Title>
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
export default book;