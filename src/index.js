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
import UpdateProfile from "views/updateProfile";
import CoachProfile from "views/CoachProfile";
import MyProfileCoach from "views/MyProfileCoach";
import MyClients from "views/MyClients";
import AddExercise from "views/AddExercise";
import AddProgram from "views/AddProgram";
import UpdateCoachProfile from "views/updateProfile";
import MyPlan from "views/MyPlan";

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
      <Route path="/Profile" exact component={Profile} />
      <Route path="/CoachProfile" exact component={CoachProfile} />
      <Route path="/MyClients" exact component={MyClients} />
      <Route path="/AddExercise" exact component={AddExercise} />
      <Route path="/AddProgram" exact component={AddProgram} />
      <Route path="/UpdateCoachProfile" exact component={UpdateCoachProfile} />

      <Route path="/MyProfileCoach" exact component={MyProfileCoach} />
      <Route path="/" exact component={Index} />
      <Route path="/BookClass" exact component={BookClass} />
      <Route path="/MyBookings" exact component={MyBookings} />
      <Route path="/MyPlan" exact component={MyPlan} />
      <Route path="/MyProfile" exact component={Profile} />
      <Route path="/ClassDetails" exact component={ClassDetails} />
       <Route path="/UpdateProfile" exact component={UpdateProfile} />
       

      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
