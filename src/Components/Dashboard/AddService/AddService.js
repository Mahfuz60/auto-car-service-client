import React, { useState } from "react";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

const AddService = () => {
  const [service, setService] = useState({
    name: "",
    price: '',
    description: "",
  });
  // handle changes
  const handleBlur = (event) => {
    const newBooking = { ...service };
    newBooking[event.target.name] = event.target.value;
    setService(newBooking);
  };

  // handle submit
  const handleSubmit = (event) => {
    fetch("https://whispering-caverns-51592.herokuapp.com/addService", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          console.log(success);
        }
      });

      event.preventDefault();
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <AdminDashboard />
      </div>
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{}} className="m-4">
              Add Service
            </h4>
          </div>
          <div className="col-md-6 ">
            <h4 style={{}} className="text-info m-4">
              {}
            </h4>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          method="POST"
          style={{ width: "75%", margin: "0 auto" }}
          className="bg-light m-5 p-5"
        >
          <input
            onBlur={handleBlur}
            type="text"
            name="name"
            className="form-control"
            placeholder="title"
            required
          />
          <br />
          <input
            onBlur={handleBlur}
            type="text"
            name="price"
            className="form-control"
            placeholder="$price"
            required
          />
          <br />
          <textarea
            onBlur={handleBlur}
            name="description"
            className="form-control"
            placeholder="description"
            required
          ></textarea>
          <br />
          <input type="file" />
          <input type="submit" value="Submit" className="btn btn-warning" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
