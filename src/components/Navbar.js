import React from 'react';
import '../styleComponents/Navbar.css';
 const MenuItems = [
       {
              title: 'PROGRAMS',
              url: '#',
              cName: 'nav-links'
       },
       {
              title: 'SHOP',
              url: '#',
              cName: 'nav-links'
       },     
       {
              title: 'ABOUT',
              url: '#',
              cName: 'nav-links'
       },
       {
              title: 'CONTACT',
              url: '#',
              cName: 'nav-links'
       },
]
class Navbar extends React.Component {
       state = {clicked: false}
       handleClick = () => {
              this.setState({clicked: !this.state.clicked})
       }
       renderItems = (item, index) => {
              return(
                     <li key={index}>
                     <a className={item.cName} href={item.url}>{item.title}</a>
                     </li>      
              )    
       }
       render() {
              return (
                     <nav className="NavItems">
                            <h4 className="nav-logo">
                            <i className="fas fa-dumbbell"></i>
                                   HIEUFIT
                            </h4>
                            <div className="menu-icon" onClick={this.handleClick}>
                                   <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </div>
                            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                                   {MenuItems.map((item, index) => {
                                          return (
                                                 this.renderItems(item,index)
                                          )
                                   })}
                                   <button><span>SIGN UP</span></button>
                            </ul>
                            <div className="nav-cart">
                                   <span>0</span>
                                   <i className="fas fa-shopping-cart"></i>      
                            </div>
                     </nav>
              )
       }
}
export default Navbar;
