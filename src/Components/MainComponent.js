import React from 'react';
import HomeComponent from './HomeComponent';
import MenuComponent from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import HeaderCompoenent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContactComponent from './ContactComponent';
import AboutUs from "./AboutComponent";
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import {
  postComment,
  postFeedback,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders
} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group"; 
  


const mapStatetoProps=state=>{
    return{
      dishes:state.dishes,
      comments:state.comments,
      promotions:state.promotions,
      leaders:state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message
  ) =>
    dispatch(
      postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
      )
    )
});


class Main extends React.Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  
  onSelectedDish(dishId){
    this.setState({selectedDish:dishId})
}

  render(){

    const HomePage=()=>{
      return(
        <HomeComponent 
        dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishErrMess={this.props.dishes.errMess}
        promotion={
          this.props.promotions.promotions.filter(promo => promo.featured)[0]
        }
        promoLoading={this.props.promotions.isLoading}
        promoErrMess={this.props.promotions.errMess}
        leader={
          this.props.leaders.leaders.filter(leader => leader.featured)[0]
        }
        leaderLoading={this.props.leaders.isLoading}
        leaderErrMess={this.props.leaders.errMess}
        ></HomeComponent>
      )
    }

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            
            this.props.dishes.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div>
        <HeaderCompoenent></HeaderCompoenent>
        <div>
 <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              classNames="page"
              timeout={300}
            >
              <Switch location={this.props.location}>
                <Route path="/home" component={HomePage} />
                <Route
                  exact
                  path="/aboutus"
                  component={() => (
                    <AboutUs
                      leaders={this.props.leaders.leaders}
                      leaderLoading={this.props.leaders.isLoading}
                      leaderErrMess={this.props.leaders.errMess}
                    />
                  )}
                />
                } />
                <Route
                  exact
                  path="/menu"
                  component={() => <Menu dishes={this.props.dishes} />}
                />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route
                  exact
                  path="/contactus"
                  component={() => (
                    <Contact
                      resetFeedbackForm={this.props.resetFeedbackForm}
                      postFeedback={this.props.postFeedback}
                    />
                  )}
                />
                <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          </div>
      <FooterComponent></FooterComponent>
     </div>
    );
  }
  
  }
  
  export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Main)
  );
