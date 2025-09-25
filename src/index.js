import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";


// views without layouts

import Team from "views/Team.js";
import Contact from "views/Contact.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Classes from "views/Classes.js";
import BookClass from "views/BookClass.js";
import MyBookings from "views/MyBookings.js";
import Shop from "views/Shop.js"
import ClassDetails from "views/ClassDetails";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/Team" exact component={Team} />
      <Route path="/Shop" exact component={Shop} />
      <Route path="/Classes" exact component={Classes} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />
      <Route path="/BookClass" exact component={BookClass} />
      <Route path="/MyBookings" exact component={MyBookings} />
      <Route path="/MyProfile" exact component={Profile} />
      <Route path="/ClassDetails" exact component={ClassDetails} />

      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
