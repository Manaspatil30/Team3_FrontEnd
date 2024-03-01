import React from 'react'
import { Button } from '@mui/material';
import "../styles/slider.css"

const SliderCard = (props) => {
  return (
    <div style={{textAlign:'center'}}>
      <h2>{props.item.name}</h2>
      <div style={{display:'flex', justifyContent:'center'}}>
      <img
        className='slide-hover'
        style={{ width: "80%", height: "40vh", borderRadius: "15px" }}
        src={props.item.image}
        alt=""
      />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <p>{props.item.description}</p>
      </div>

      <Button variant="contained">Check it out!</Button>
    </div>
  );
}

export default SliderCard