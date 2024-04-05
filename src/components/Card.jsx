import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemeCard = (props) =>{
    const navigate =  useNavigate();
    const buttonStyle = {
        border: '1px solid black',
    };
    return (
    <Card style={{ width: '20.5rem', margin: "25px"}}>
      <Card.Img variant="top" src= {props.img} />
      <Card.Body className="text-center">
        <Card.Title> {props.title} </Card.Title>
        <Button style= {buttonStyle} onClick= {(e) => navigate(`/edit?url=${props.img}`)} variant="primary"> Edit </Button>
      </Card.Body>
    </Card>
    );
};

export default MemeCard;