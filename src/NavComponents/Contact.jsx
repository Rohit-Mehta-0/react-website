import React, { useState } from "react";
function Contact() {
    const [data,setData]=useState({
        fullName:'',
        phone:'',
        email:'',
        message:''
    })
    const inputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,[name]:value,
            }
        })
    }
    const formSubmit=(event)=>{
     event.preventDefault();
     alert("Thank You , We will get back to as soon as possible");
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your Name"
                  required
                />
                <label className="form-label">
                  Phone:
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Mobile Number"
                />
                <label className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                  required
                />
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                ></textarea>
                </div>
                <div className="col-12 my-2">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
