import React from 'react';

import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import MenuComponent from './Components/MenuComponent';
import {DISHES} from './shared/dishes';
class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      dishes: DISHES
    };
  }
  render(){
    return (
      <div>
       <Navbar
       dark color="primary">
         <div className="container">
           <NavbarBrand href="/">Restaurant </NavbarBrand>
         </div>
       </Navbar>
       <MenuComponent dishes={this.state.dishes}></MenuComponent>
      </div>
    );
  }
  
  }
  
export default App;
