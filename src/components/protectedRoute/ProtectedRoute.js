import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { displayName } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (displayName) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: `/`,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
