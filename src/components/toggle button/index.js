import React from 'react';
import  Modal from '../modal/index'
import Data from  '../data'
import './toggle.scss'


const Toggle = () => (
  <div class="toggle">
    <h1 className='pricing'>Our Pricing</h1>
  <input type="checkbox" id="toggleInput" name="toggleInput" />
  <label for="toggleInput" className='row'>
    <h3>Anually</h3>
    <span className="toggle-track"></span>
    <h3>Monthly</h3>
  </label>
  <div className='cards'>
  {
    Data.map((card, i )=> (
      <Modal key={i}  carditem={card}/>
      // console.log(Data)
    ))
  }
  </div>
</div>
)

export default Toggle;