import React from "react";
import { Link } from "react-router-dom";

const ClientStoriesItem = props => (
  <div className="jumbotron">
    <div className="container">
      <div className="row">
        <h1 className="col-sm display-4">{props.title}</h1>
        <div className="col-sm">
          <img className=" rounded img-thumbnail img-fluid" src={props.icon} />
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-sm">
            <Link
              className="btn btn-primary"
              to={{
                pathname: `/client/${props.path}`,
                state: { props }
              }}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ClientStoriesItem;
