import React from 'react';

import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import MenuComponent from './Components/MenuComponent';

class App extends React.Component {
  render(){
    return (
      <div>
       <Navbar
       dark color="primary">
         <div className="container">
           <NavbarBrand href="/">Restaurant </NavbarBrand>
         </div>
       </Navbar>
       <MenuComponent></MenuComponent>
      </div>
    );
  }
  
  }
  
export default App;
