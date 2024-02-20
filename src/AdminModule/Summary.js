import React from 'react'
import Sysarchi from './Proj-Images/Grooming recommendation software.png'
import Outcome1 from './Proj-Images/ex-outcomes1.jpeg'
import Outcome2 from './Proj-Images/ex-outcomes2.jpeg'
import Outcome3 from './Proj-Images/ex-outcomes3.jpeg'

function Summary() {
  return (
    <div className='summ-container'>
      <div className='summ-content'>

        <div className='summ-title'>
          <h2>Generative AI based Grooming Recommendation System</h2>
        </div>

        <div className='summ-abstract'>
          <h5 className='summ-content-title'>ABSTRACT</h5>
          <p className='summ-content-body'>
          The Generative Al based recommendation system for grooming is a cutting-edge application that revolutionizes personal grooming recommendations by allowing users to upload their images for precise, personalized suggestions. Utilizing advanced machine learning and image analysis, this system comprehensively assesses facial features, hair textures, and skin tones. It offers tailored grooming recommendations encompassing hairstyles, facial hair styles, hair colors, and more, seamlessly rendered onto the user's uploaded image. Through an intuitive interface, users receive a real-time preview showcasing the recommended grooming styles, ensuring a tangible and accurate representation of how the suggestions align with their unique features. The application's innovative approach not only considers contemporary trends but also explores diverse grooming possibilities, empowering users to make informed decisions about their personal grooming choices. This platform aims to redefine the grooming experience by merging AI-driven precision with interactive, user-centric visualization, ultimately enhancing individual confidence and satisfaction in their grooming decisions.
          </p>
        </div>

        
        <div className='summ-architecture'>
          <h5 className='summ-content-title'>SYSTEM ARCHITECTURE</h5>
          <p className='summ-content-body'>
            <img src={Sysarchi} className='sys-archi' alt='system-architecture'/>
          </p>
        </div>

        <div className='summ-abstract'>
          <h5 className='summ-content-title'>MODULES</h5>
          <ul className='summ-modules'>
            <li>Landing page</li>
            <li>3D Try On Lab</li>
            <li>Recommended Styles</li>
            <li>Explore Styles</li>
            <li>Products</li>
            <li>Wishlist Page</li>
          </ul>
        </div>

        <div className='summ-abstract'>
          <h5 className='summ-content-title'>TECH-STACK</h5>
          <ul className='summ-modules'>
            <li>FrontEnd - ReactJs | Javascript | CSS | HTML</li>
            <li>Backend - PythonDjango | PostgreSQL </li>
            <li>Algorithms - CNN | VGG | GAN </li>
            <li>Tools - GitHub | Vscode</li>
          </ul>
        </div>   
        
        <div className='summ-abstract'>
          <h5 className='summ-content-title'>EXPECTED OUTCOMES</h5>
            <img src={Outcome1} className='exp-outcome-images'/><hr/>
            <img src={Outcome2} className='exp-outcome-images'/><hr/>
            <img src={Outcome3} className='exp-outcome-images'/><hr/>    
        </div>  

        <div className='summ-abstract'>
          <h5 className='summ-content-title'>BASE PAPER</h5>
          <p className='summ-content-body'>
            Click Here to view Base Paper - <li>https://ieeexplore.ieee.org/abstract/document/10276139</li>
          </p>
        </div>

        <div className='summ-abstract'>
          <h5 className='summ-content-title'>PAPER PUBLICATION DETAILS</h5>
          <p className='summ-content-body'>
          2023 International Conference on Network, Multimedia and Information Technology (NMITCON),<br/> Bengaluru, India, 2023, pp. 1-8 <br/>
          <b>doi: 10.1109/NMITCON58196.2023.10276139.</b>
          </p>
        </div>

        <div className='summ-abstract'>
          <h5 className='summ-content-title'>DEMO</h5>
          <p className='summ-content-body'>
            Click here to view Demo video of the project - <br/>
            https://hellothisismyprojectdemovideo
          </p>
        </div>   

        <div className='summ-abstract'>
          <h5 className='summ-content-title'>DOCUMENTATION DOWNLOAD</h5>
          <p className='summ-content-body'>
            Click here to download project documentation<br/>
            https://hellothisismyprojectdemovideo
          </p>
        </div>

        <div className='summ-abstract'>
          <h5 className='summ-content-title'>PPT DOWNLOAD</h5>
          <p className='summ-content-body'>
            Click here to download project PPT<br/>
            https://hellothisismyprojectdemovideo
          </p>
        </div>


      </div>
    </div>
  )
}

export default Summary
