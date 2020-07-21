import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import Posts from './Home';


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
  
  function Index() {
    return (
    <>
    <h2>Home</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/people/">People</Link>
          </li> 
          <li className="hvr-underline-from-center">
            <Link to="/posts/1">Posts</Link>
          </li> 
        </ul>
      </nav>
    </>
    );
  }

  function About() {
    return (
      <>
      <h2>Home</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/people/">People</Link>
            </li> 
            <li className="hvr-underline-from-center">
              <Link to="/posts/1">Posts</Link>
            </li> 
          </ul>
        </nav>
      </>
      );
    }
  function Users() {
    return <h2>Users</h2>;
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
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/about/" component={About} />
    <Route path="/users/" component={Users} />
    <Route path="/posts/:id" component={Posts} />
    <Redirect from="/people/" to="/users/" />
    <Route component={NotFound}/>
  </Switch>
  );
}

export default Routes;