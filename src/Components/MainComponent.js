import React from 'react';
import HomeComponent from './HomeComponent';
import MenuComponent from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import HeaderCompoenent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContactComponent from './ContactComponent';
import AboutUs from "./AboutComponent";
import {Switch,Route,Redirect} from 'react-router-dom';

    
  
class Main extends React.Component {
  constructor(props){
    super(props);

    this.state={
      dishes: DISHES,
      // selectedDish:null,
      comments: COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    };
  }

  onSelectedDish(dishId){
    this.setState({selectedDish:dishId})
}

  render(){

    const HomePage=()=>{
      return(
        <HomeComponent dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
        ></HomeComponent>
      )
    }
    return (
      <div>
        <HeaderCompoenent></HeaderCompoenent>
        <Switch>
          <Route path='/home' component={HomePage}></Route>
    <Route exact path="/menu" component={()=><MenuComponent dishes={this.state.dishes}/>}> </Route>
    <Route path='/contactus' component={ContactComponent}></Route>
    <Route
            path="/aboutus"
            component={() => <AboutUs leaders={this.state.leaders} />}
          />
     <Redirect to="/home"></Redirect>  
        </Switch>
      <FooterComponent></FooterComponent>
      </div>
    );
  }
  
  }
  
export default  Main;
