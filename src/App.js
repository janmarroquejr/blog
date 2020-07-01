import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Post/Posts";
import Write from "./components/Write/Write";

import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/blog",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/write" component={Write} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
