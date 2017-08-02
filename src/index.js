import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,browserHistory,IndexRoute} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

import App from './App';
import Home from './containers/HomeContainer';
import Menu from './components/Menu';
import About from './components/About';
import Contacts from './components/Contacts';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/Menu" component={Menu} />
      <Route path="/About" component={About} />
      <Route path="/Contacts" component={Contacts} />
    </Route>
  </Router>,
  document.getElementById('root'));
