import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRouter";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// Public pages
import Team from "views/Team.js";
import Contact from "views/Contact.js";
import Index from "views/Index.js";
import Shop from "views/Shop.js";

// Member pages
import Classes from "views/Classes.js";
import BookClass from "views/BookClass";
import MyBookings from "views/MyBookings";
import ClassDetails from "views/ClassDetails";
import MyPlan from "views/MyPlan";
import Profile from "views/Profile";

// Shared user pages

import UpdateProfile from "views/updateProfile";

// Coach pages
import CoachProfile from "views/CoachProfile";
import MyProfileCoach from "views/MyProfileCoach";
import MyClients from "views/MyClients";
import AddExercise from "views/AddExercise";
import AddProgram from "views/AddProgram";
import UpdateCoachProfile from "views/updateProfile";

// ROLES
const ROLE_ADMIN = "admin";
const ROLE_COACH = "coach";
const ROLE_MEMBER = "member";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Switch>

        {/* PUBLIC ROUTES */}
        <Route path="/" exact component={Index} />
        <Route path="/Team" exact component={Team} />
        <Route path="/Shop" exact component={Shop} />
        <Route path="/Contact" exact component={Contact} />

        {/* AUTH ROUTES */}
        <Route path="/auth" component={Auth} />

        {/* ADMIN */}
        <ProtectedRoute
          path="/admin"
          roles={[ROLE_ADMIN]}
          component={Admin}
        />

        {/* MEMBER ONLY */}
        <ProtectedRoute
          path="/Profile"
          roles={[ROLE_MEMBER]}
          component={Profile}
        />
        <ProtectedRoute
          path="/Classes"
          roles={[ROLE_MEMBER]}
          component={Classes}
        />
        <ProtectedRoute
          path="/BookClass"
          roles={[ROLE_MEMBER]}
          component={BookClass}
        />
        <ProtectedRoute
          path="/MyBookings"
          roles={[ROLE_MEMBER]}
          component={MyBookings}
        />
        <ProtectedRoute
          path="/ClassDetails"
          roles={[ROLE_MEMBER]}
          component={ClassDetails}
        />
        <ProtectedRoute
          path="/MyPlan"
          roles={[ROLE_MEMBER]}
          component={MyPlan}
        />

        {/* COACH ONLY */}
        <ProtectedRoute
          path="/CoachProfile"
          roles={[ROLE_COACH]}
          component={CoachProfile}
        />
        <ProtectedRoute
          path="/MyProfileCoach"
          roles={[ROLE_COACH]}
          component={MyProfileCoach}
        />
        <ProtectedRoute
          path="/MyClients"
          roles={[ROLE_COACH]}
          component={MyClients}
        />
        <ProtectedRoute
          path="/AddExercise"
          roles={[ROLE_COACH]}
          component={AddExercise}
        />
        <ProtectedRoute
          path="/AddProgram"
          roles={[ROLE_COACH]}
          component={AddProgram}
        />
        <ProtectedRoute
          path="/UpdateCoachProfile"
          roles={[ROLE_COACH]}
          component={UpdateCoachProfile}
        />

        {/* SHARED PROTECTED (MEMBER + COACH + ADMIN) */}
        <ProtectedRoute
          path="/Profile"
          roles={[ROLE_MEMBER, ROLE_COACH, ROLE_ADMIN]}
          component={Profile}
        />
        <ProtectedRoute
          path="/UpdateProfile"
          roles={[ROLE_MEMBER, ROLE_COACH, ROLE_ADMIN]}
          component={UpdateProfile}
        />

        {/* REDIRECT ALL */}
        <Redirect to="/" />

      </Switch>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
