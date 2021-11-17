import React from "react";
import{ Card,Badge } from "react-bootstrap";


const IcecreamCard =({item})=>{
    return(
        <Card  border="primary" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>{item.combre}</Card.Title>
      <Card.Text>
              {item.sabor}
      </Card.Text>
      <Badge bg="primary">{item.precio}</Badge>
    </Card.Body>
  </Card>
    )
}

export default IcecreamCard;