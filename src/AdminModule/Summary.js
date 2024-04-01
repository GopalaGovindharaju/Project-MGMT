import React, { useState } from 'react'
import Sysarchi from './Proj-Images/Grooming recommendation software.png'
import Outcome1 from './Proj-Images/ex-outcomes1.jpeg'
import Outcome2 from './Proj-Images/ex-outcomes2.jpeg'
import Outcome3 from './Proj-Images/ex-outcomes3.jpeg'
import { useOutletContext } from 'react-router-dom';



import axios from 'axios'

function Summary() {
  const ID = useOutletContext();
 
  const [review0Mark,setReview0Mark]=useState([])
  const [review1Mark,setReview1Mark]=useState([])
  const [review2Mark,setReview2Mark]=useState([])
  const [review3Mark,setReview3Mark]=useState([])



  useState(()=>{
    const data = {
      id: ID,
    }
    console.log('hiiiii')
    axios.post('http://127.0.0.1:8000/panel/fetchreview0Marks/',data)
    .then((response) => {
      console.log(response.data)
      setReview0Mark(response.data.review0)
      setReview1Mark(response.data.review1)
      setReview2Mark(response.data.review2)
      setReview3Mark(response.data.review3)
     
    })
    .catch((error) => {
      console.log(error)
    })
},[]);


  return (
    <div>      

      	<table className="custom-table">
        <thead>
          <tr>
                <th scope="col"className='col-2'>Name</th>
                <th scope="col" className='col-2'>Reg NO</th>
                <th scope="col" className='col-2'>Review0</th>
                <th scope="col" className='col-2'>Review1</th>
                <th scope="col" className='col-2'>Review2</th>
                <th scope="col" className='col-2'>Review3</th>
                <th scope="col" className='col-2'>Total</th>


          </tr>
        </thead>
        <tbody>
          {review0Mark.map((review0Mark ,index) => (
            <tr key={index}>
              <td>{review0Mark.ID}</td>
              <td>{review0Mark.Name}</td>
              <td>{review0Mark.Review0_Marks}</td>
              <td>{review1Mark[index] ? review1Mark[index].Review1_Marks : ''}</td>
              <td>{review2Mark[index] ? review2Mark[index].Review2_Marks : ''}</td>
              <td>{review3Mark[index] ? review3Mark[index].Review3_Marks : ''}</td>
              <td>{(review0Mark.Review0_Marks || 0) + (review1Mark[index]?.Review1_Marks || 0) + (review2Mark[index]?.Review2_Marks || 0) + (review3Mark[index]?.Review3_Marks || 0)}</td>

            </tr>
          
          ))}

        </tbody>
      </table>
	  

            
           

          <center><h2>Remarks</h2></center>
      <div>

      <table className="custom-table">
        <thead>
          <tr>
                <th scope="col"className='col-2'>Name</th>
                <th scope="col" className='col-2'>Reg NO</th>
                <th scope="col" className='col-2'>Review0_FeedBack</th>
                <th scope="col" className='col-2'>Review1_FeedBack</th>

                <th scope="col" className='col-2'>Review2_FeedBack</th>

                <th scope="col" className='col-2'>Review3  _FeedBack</th>

                
          </tr>
        </thead>
        <tbody>
          {review0Mark.map((review0Mark, index) => (
            <tr key={index}>
              <td>{review0Mark.ID}</td>
              <td>{review0Mark.Name}</td>
              <td>{review0Mark.Review0_Feedback}</td>
              <td>{review1Mark[index] ? review1Mark[index].Review1_Feedback : ''}</td>
              <td>{review2Mark[index] ? review2Mark[index].Review2_Feedback : ''}</td>
              <td>{review3Mark[index] ? review3Mark[index].Review3_Feedback : ''}</td>

            </tr>
          ))}
        </tbody>
      </table>

      </div>
      <div>
      

      </div>
    </div>
  )
}

export default Summary
