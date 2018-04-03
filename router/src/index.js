import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from  'react-router-dom';

//components
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';

const App = () => {
  return(
      <BrowserRouter>
          <div>
              <header>
                  header
              </header>
              <Route path='/' exact component={Home}/>
              <Route path='/posts' component={Posts}/>
              <Route path='/profile' component={Profiles}/>
          </div>
      </BrowserRouter>
  )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)