import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../components/home/Home";

export const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
