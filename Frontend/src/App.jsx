import React from 'react'
import './App.css'
import Nav from './Nav'
import Filter from './Filter'
import  Hotellist  from './Hotellist'
import Banner from './Banner'


const App = () => {
  return (
    <div>
      <Nav/>
      <Filter/>     
      <Banner/>
      <Hotellist/>
    </div>
   
  )




}

export default App