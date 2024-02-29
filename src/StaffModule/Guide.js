import React from 'react'
import Banner from '../StudentModule/Banner'
import Body from './Body'
import { useParams } from 'react-router-dom';

function Guide() {
  const { Id } = useParams();
  return (
    <div>
      <Banner batchNo={'InduLekha'} moduleName={'Staff Page'} />
      <Body ID={Id}/>
      
    </div>
  )
}

export default Guide
