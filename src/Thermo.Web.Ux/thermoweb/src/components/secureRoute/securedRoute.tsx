import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
  useLocation

} from "react-router-dom";

import {fakeAuth} from '../login/fakeAuth';

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{""}
      <button
        onClick={() => {
          fakeAuth.signout();
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export function SecuredRoute({ children, path }: { children:any, path:string }) {
    return (
      <Route
        path={path}
        render={({ location }) =>
        fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }