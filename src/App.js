import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import Write from "./components/Write/Write";

import "./App.css";

const App = () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/blog" || "http://192.168.100.45:4000/blog",
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
};

export default App;
