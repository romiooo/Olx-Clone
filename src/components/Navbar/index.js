import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){


    return(
        // Header
      <div className="App">
          <nav class="header-nav">
            <ul class="header-ul">
                <li class="header-li"> 
                    <h1>Olx</h1>
                </li>
                <li>
                    <select>
                        <option>India</option>
                        <option>Kerela</option>
                        <option>Tamin Nadu</option>
                        <option>Punjab</option>
                        <option>Maharashtra</option>
                    </select>
                </li>
                <li class="header-li">
                    <input type="text" placeholder="Find Cars,Mobilephones and more..."/>
                    <i class="fas fa-search"></i>
                </li>
                <li>
                    <label>ENGLISH
                        <select className="select-box">
                            
                        </select>
                    </label>
                </li>
                <li>
                    <h5><a href="#">Login</a></h5>
                </li>
            </ul>
          </nav>

           <nav className="nav-box">
            <ul className="ul-box">
                <label>ALL CATEGORIES
                    <select className="select-box">  
                    </select>
                </label>
                <Link to="/car">
                    <li className="li-box">Cars</li>
                </Link>
                <Link to="/motercycle">
                    <li className="li-box">Motercycles</li>
                </Link>
                <Link to="/mobile">
                    <li className="li-box">Mobiles</li>
                </Link>        
            </ul>
        </nav>
      </div>
    );
    

}

export default Navbar;