import React from "react";
import { Link } from "react-router-dom";

//this is common component for home and about us page as they are nearly similar

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name} <strong style={{color:props.color}}> Brand Name</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <Link to={props.visit} className="btn btn-outline-primary">
                      {props.btnName}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-1 my-4 ">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated my-3"
                    alt="Home"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Common;
