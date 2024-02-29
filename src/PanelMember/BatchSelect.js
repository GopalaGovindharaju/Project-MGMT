import React, { useState } from 'react'

function BatchSelect() {
  
  const [batchNo, setBatchNo] = useState('');
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <div className='text-select-batchno'>
        <h6 style={{marginTop:'10px', marginRight:'10px'}}>SELECT BATCH-NO</h6>
      </div>
      <div className='select-batchno'>
        <select
        onChange={(e) => setBatchNo(parseInt(e.target.value))}
        className="form-select"
        >
          {Array.from({ length: 8 }).map((no, index) => (
          <option key={index + 1} value={index + 1}>
            BNo: {index+1} 
          </option>))}            
        </select>
      </div>
      
    </div>
  )
}

export default BatchSelect
