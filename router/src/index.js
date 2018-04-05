import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from  'react-router-dom';

//components
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';
import PostItem from  './components/post_item';

const App = () => {
  return(
      <BrowserRouter>
          <div>
            <header>
                <NavLink to='/'>Home</NavLink><br/>
                <NavLink
                  to='/posts'
                  activeStyle={{color: 'red'}}
                  activeClassName='selected'
                >Posts</NavLink><br/>
                <NavLink to={{
                  pathname:'/profile',
                }}>Profile</NavLink><br/>
                <hr/>
            </header>
            <Switch>
                <Route path='/posts/:id/:username/' component={PostItem}/>
                <Route path='/profile' component={Profiles}/>
                <Route path='/posts' exact component={Posts}/>
                <Route path='/' component={Home}/>
            </Switch>

          </div>
      </BrowserRouter>
  )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);