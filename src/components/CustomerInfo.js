import React, { useState } from "react";
import "./CustomerInfo.css";

import { cInfo } from "./data";

const CustomerInfo = () => {
  const [info, setInfo] = useState(cInfo);

  const [addData, setAddData] = useState({
    fullname: "",
    product: "",
    phone: "",
    price: "",
  });

  const handleFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newAddData = { ...addData };
    newAddData[fieldName] = fieldValue;
    setAddData(newAddData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newInfo = {
      fullname: addData.fullname,
      product: addData.product,
      phone: addData.phone,
      price: addData.price,
     
    };

    const latestInfo = [...info, newInfo];
    setInfo(latestInfo);
  };

  return (
    <>
      <section className="container text-center text-dark">
        <h1 className="mt-5">INFORMATION OF CUSTOMERS</h1>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          
            <form
              className="shadow p-3 mb-5 bg-white rounded   mt-5 w-80 " autoComplete="off"
              onSubmit={handleFormSubmit}
              
            >
              <h3 className="mt-2">
                <i class="bi bi-info-circle"></i> Add info
              </h3>
              <div className=" w-50 p-3 text-start">
                <label className="form-label  ">Full Name</label>
                <input
                  name="fullname"
                  type="text"
                  className="form-control"
                  id="fullname"
               
                  onChange={handleFormChange}
                />
              </div>
              <div className=" w-50 p-3 text-start">
                <label className="form-label  ">Product</label>
                <input
                  name="product"
                  type="text"
                  required="required"
                  className="form-control"
                  id="product"
                  onChange={handleFormChange}
                />
                
              </div>
              <div className=" w-50 p-3 text-start">
                <label className="form-label  ">Phone</label>

                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  required="required"
                  onChange={handleFormChange}
                />
              </div>
              <div className=" w-50 p-3 text-start">
                <label className="form-label  ">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  required="required"
                  onChange={handleFormChange}
                />
              </div>

              <button type='submit'  className="btn btn-primary mb-2">
                Process
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <table className="table mt-5 ">
              <thead className="shadow p-3 mb-5 bg-white rounded ">
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">Product</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody className="bg-secondary text-white">
              {info.map((details)=>
                  <tr key={details.id}>
                  <th>{details.fullname}</th>
                  <td>{details.product}</td>
                  <td>{details.phone}</td>
                  <td>{details.price} BDT</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;
