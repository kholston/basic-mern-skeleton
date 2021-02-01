import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './auth/Signin';
import Profile from './user/Profile';
import EditProfile from './user/EditProfile';
import PrivateRoute from './auth/PrivateRoute';

const MainRouter = () =>{
    return ( 
        <div>
            <Switch>
                <PrivateRoute path="user/edit/:userId" component={EditProfile}/>
                <Route exact path="/" component={Home}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin} />
                <Route path="/user/:userId" component={Profile}/>
            </Switch>
        </div>
    )
}

export default MainRouter;