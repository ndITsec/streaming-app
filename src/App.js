import React, { useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfilePage from './components/ProfilePage';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      } else {
        dispatch(logout());
      }

    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
    <Router>
      {!user? (
        <LoginPage />
      ) : ( <Switch>
        <Route path='/profile'>
          <ProfilePage />
        </Route>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </Switch>
       )}
    </Router>
    </div>
  );
}

export default App;
