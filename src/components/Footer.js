import React from 'react';
import '../styleComponents/Footer.css';

class Footer extends React.Component {
   render(){
      return(
       <div className="footer-container">
         <div className="slogan">
            <i className="fas fa-dumbbell">
               <span>HIEUFIT</span>
            </i>
            <p>Fitness Culture is here to provide the members of Fitness Culture world class Training, Nutrition, and Mobility Programs.</p>   
         </div>
         <div className="Pages">
            <h4>PAGES</h4>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
         </div>
         <div className="subcribe">
            <div className="list-icon">
            <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-facebook-messenger"></i>
            <i className="fab fa-instagram"></i>
            <i className="far fa-envelope"></i>
            </div>
         </div>            
       </div>
      )    
   }    
}
export default Footer;