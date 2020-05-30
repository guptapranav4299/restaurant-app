import React from 'react';
import Main from './Components/MainComponent';
import './App.css';
import Dishdetail from './Components/DishdetailComponent';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
      <div>
        <Main></Main>

      </div>
      </BrowserRouter>
    );
  }
  
  }
  
export default App;
