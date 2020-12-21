import React from 'react';
import '../styleComponents/Body.css';

class Body extends React.Component {
   render () {
      return (
         <div className="body-container">
            <div className="title">"TRY SO HARD AND GET SO FAR."</div>
            <div className="body-main">
               <div className='img'>
                  <img src="imgBody.jpg" alt=""></img>
               </div>
               <div className="intro">
                  <h1>YOU'VE PUT IN THE WORK. NOW GET THE RESULTS.</h1>
                  <p>Expert-written training, nutrition, and mobility programs designed around your goals—all in one app.</p>
                  <button><span>TAKE THE PROGRAM</span></button>
               </div>
            </div>   
         </div>
      )    
   }
} 
export default Body;