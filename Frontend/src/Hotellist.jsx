import React from 'react'
import './Hotellist.css'
import HotelCard from './HotelCard'

import HImg1 from  './assets/hotel.jpg'
import HImg2 from  './assets/hotel2.jpg'
import HImg3 from  './assets/hotel3.jpg'
import HImg4 from  './assets/hotel4.jpg'
import HImg5 from  './assets/hotel5.jpg'
import HImg6 from  './assets/hotel6.jpg'

const Hotellist = () => {



    const Hotels_data = {
        hotel1:{
            hotelName : "Grand Palace Hotel",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, qui nulla! Tempore ex",
            src : HImg1
        },
        hotel2:{
            hotelName : "Hotel 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, qui nulla! Tempore ex",
            src : HImg2
        },
        hotel3:{
            hotelName : "Hotel 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, qui nulla! Tempore ex",
            src : HImg3
        },
        hotel4:{
            hotelName : "Hotel 4",
 description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, qui nulla! Tempore ex",
            src : HImg4
        },
        hotel5:{
            hotelName : "Hotel 5",
             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, qui nulla! Tempore ex",
            src : HImg5
        },
        hotel6:{
            hotelName : "Hotel 6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, qui nulla! Tempore ex",
            src : HImg6
        },
    }

    console.log(Hotels_data.hotel1)



  return (
    <>
     <section className='hotal-list'>
        <h3>Hotal List <br /></h3>
        <br />
        <div className="cards">
        <HotelCard data={Hotels_data.hotel1} />
        <HotelCard data={Hotels_data.hotel2} />
        <HotelCard data={Hotels_data.hotel3} />
        <HotelCard data={Hotels_data.hotel4} />
        <HotelCard data={Hotels_data.hotel5} />
        <HotelCard data={Hotels_data.hotel6} />
        </div>
        
     </section>
    </>
  )
}

export default Hotellist