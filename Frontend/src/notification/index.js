import React, { Fragment } from "react";

const NotificationAlert = (props) => {
  return (
    <Fragment>
      {props && props.message.type === "success" && (
        <div className="alert alert-info" role="alert">
          <center> {props.message.message}</center>
        </div>
      )}
      {props && props.message.type === "error" && (
        <div className="alert alert-danger" role="alert">
          <center> {props.message.message}</center>
        </div>
      )}
    </Fragment>
  );
};

export default NotificationAlert;
