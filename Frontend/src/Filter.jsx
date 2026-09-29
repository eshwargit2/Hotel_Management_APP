import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div>
        <section className='filter'>
              <input type="text" className='search-input' placeholder='Search Hotel' />

              <div className="filter-range">
                <p>Price Range</p>
                 <select name="" id="">
                    <option value="">Min Price</option>
                    <option value="">Max Price</option>
                 </select>
                    <button type='button'>Apply</button>
              </div>
        </section>


    </div>
  )
}

export default Filter