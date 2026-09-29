import React from 'react'
import './HotelCard.css'
import HImg from  './assets/hotel.jpg'

const HotelCard = ({data}) => {
  return (
    <>
    <div className='card'>
       <img src={data.src} alt="" />
       <div className="card-dis">
        <h4>{data.hotelName}</h4>
        <p>{data.description}</p>
       </div>
    </div>
    </>
  )
}

export default HotelCard