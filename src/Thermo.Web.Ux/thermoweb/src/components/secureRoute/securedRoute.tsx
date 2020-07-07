import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

export function SecuredRoute({ children, path }: { children:any, path:string }) {
    return (
      <Route
        path={path}
        render={({ location }) =>
          true ? (
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