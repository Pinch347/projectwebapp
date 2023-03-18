import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/todos">
              <TodoList />
            </Route>
            <Route exact path="/contact">
              <ContactForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
