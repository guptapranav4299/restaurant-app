import React from 'react';

import MenuComponent from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import HeaderCompoenent from './HeaderComponent';
import FooterComponent from './FooterComponent';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state={
      dishes: DISHES,
      selectedDish:null
    };
  }

  onSelectedDish(dishId){
    this.setState({selectedDish:dishId})
}

  render(){
    return (
      <div>
        <HeaderCompoenent></HeaderCompoenent>
             <MenuComponent dishes={this.state.dishes} onClick={(dishId)=>{this.onSelectedDish(dishId)}}></MenuComponent>
      <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}></Dishdetail>
      <FooterComponent></FooterComponent>
      </div>
    );
  }
  
  }
  
export default  Main;
