import React, {useState} from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import Home from './Home';
import Produto from './Produto';
import About from './about';

function Status({ code, children }) {
    return (
      <Route
        render={({ staticContext }) => {
          if (staticContext) staticContext.status = code;
          return children;
        }}
      />
    ); 
  }
  
  
  function NotFound() {
    return (
      <>
        <Status code={404}/>
        <h2>Not found</h2>
      </>
    )
  }

function Routes() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link to="/produto">Produto</Link>
          </li>
          <li  className="hvr-underline-from-center">
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/produto" component={Produto} />
    

        <Route component={NotFound}/>
      </Switch>
    </div>
  ); 
}

export default Routes;

