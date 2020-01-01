import React from 'react';

import './toggle.scss'

const Toggle = () => (
  <div class="toggle">
    <h1 className='pricing'>Our Pricing</h1>
  <input type="checkbox" id="toggleInput" name="toggleInput" />
  <label for="toggleInput" className='row'>
    <h3>Anually</h3>
    <span class="toggle-track"></span>
    <h3>Monthly</h3>
  </label>
</div>
)

export default Toggle;