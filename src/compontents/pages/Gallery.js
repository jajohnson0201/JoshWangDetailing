import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


export default function Gallery (){
    return (
        
        <div>
        <Carousel pause="hover" >
        <Carousel.Item interval={3000} >

        <Card style={{ width: '50rem' ,height: '30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Carousel.Item>

        <Carousel.Item interval={2000} >
        <Card style={{ width: '50rem', height: '30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
        <Card style={{ width: '50rem' , height: '30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </Carousel.Item>
      </Carousel>
      </div>
    );
}