import React from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card';

function Img(props) {

function enter(){
  document.querySelector(`.${props.name}`).src = props.change;
}
function leave(){
  document.querySelector(`.${props.name}`).src = props.image;
}

  return (
    <Card className='card' style={{ width: '15rem' }}>
      <Card.Img className={props.name} style={{width:"220px"}}variant="top" src={props.image} alt="shrimp" onMouseEnter={enter} onMouseLeave={leave} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Img