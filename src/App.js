import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/login";
import UserPage from "./components/userPage";
function App() {
    return (
        <div className="container">
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login" component={Login} />
                <Route path="/users" exact component={Users} />
                <Route path="/users/:id" component={UserPage} />
            </Switch>
        </div>
    );
}

export default App;
