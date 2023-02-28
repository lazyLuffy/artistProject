import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./Card.css";




function Card() {

const [cardData,setCardData] = useState()

useEffect(()=>{
    axios('https://63fdd74419f41bb9f654c33c.mockapi.io/api/zone/users').then((res)=>{
       
        console.log(res)
        setCardData(res.data)
    }).catch((err)=>{
        console.log('something went wrong',err)
    })
},[])

  return (
    <div className="col-12 d-flex align-items-center flex-column justify-content-center my-4">
      <div>
        <p className="display-2 fw-bold  text-center">SINGERS</p>
        <p className="fs-6 text-center px-5 my-2">
          Select an artist that matches your vibe.
        </p>
      </div>
      <div className="d-flex align-items-center flex-wrap flex-column flex-lg-row justify-content-center px-4">
      {cardData?.map(({name,avatar,profession},i)=>(
        <div className="col-12 col-md-4 rounded-bottom my-4 px-2" key={i}>
        <div className="col-12  border border-1  border-dark  rounded-top">
          <img src={avatar} alt="imageDemo" className="img-fluid col-12 " />
        </div>

        <div className="col-12 bottomBorder">
          <p className="fs-4 fw-bold text-center">{name}</p>
          <p className="fs-4 text-center">{profession}</p>
          <div className="px-3">
            <p>New Delhi</p>
            <span className="d-flex align-items-center justify-content-between">
              <p>Event Bookings</p>
              <p>368</p>
            </span>
          </div>
          <div className=" d-flex align-items-center justify-content-evenly my-4">
            {[1, 2, 3, 4].map((v, i) => (
              <div className="col-2 border border-1 rounded" key={i}>
                <img src="/demoImage.png" className="img-fluid" />
              </div>
            ))}
          </div>

          <div className="col-12 d-grid border border-1  border-dark  rounded-bottom">
          
          <button className="fs-4 btn btn-dark " >
          Select
          </button>     
          </div>
        </div>
      </div>
    ))}
      </div>
  
      
    </div>
  );
}

export default Card;
