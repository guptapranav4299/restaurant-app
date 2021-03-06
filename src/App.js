import React from 'react';
import Main from './Components/MainComponent';
import './App.css';
import Dishdetail from './Components/DishdetailComponent';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/ConfigureStore';


const store=ConfigureStore();

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div>
        <Main></Main>

      </div>
      </BrowserRouter>
      </Provider>
    );
  }
  
  }
  
export default App;
