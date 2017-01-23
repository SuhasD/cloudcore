
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './App';
import About from './menu_items/About';
import { Modal, Navbar, Nav, NavItem, NavDropdown, Button, ButtonToolbar, SplitButton, MenuItem} from 'react-bootstrap';


class Menu extends React.Component {


  constructor(props){
    super(props);
    this.state = {

    };
  }

   render() {
     return (
      <div>
        <Navbar collapseOnSelect id="general_header">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>React-Bootstrap</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#"> <Link to='/about'> About</Link></NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


       
        {this.props.children}
      </div>

      )
   }
}

class MenuRoute extends Component {
  render() {
    return (        
        <Router history={browserHistory}>
          <Route path="/" component={Menu}>
             <IndexRoute component={App} />
             <Route path="/home" component={App} />
             <Route path="/about" component={About} /> 
          </Route>
       </Router>
    );
  }
}

export default MenuRoute;

