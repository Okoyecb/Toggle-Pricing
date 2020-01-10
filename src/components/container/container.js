import React from 'react';
import Toggle from '../toggle button/index'
import { ReactComponent as Top } from '../../assests/top.svg';
import { ReactComponent as Bottom } from '../../assests/bottom.svg';

import './container.scss'

const Container = () => (
    <div className='contain'>
      <div className='top'>
        <Top className='bg-top' />
      </div>
      <Toggle />
      <div className='bottom'>
         <Bottom className='bg-bottom' />
      </div>
    </div>
)

export default Container;