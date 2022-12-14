import "./App.css";
import Login from "./components/Login";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={ChatRoom} path="/" />
          </Switch>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
