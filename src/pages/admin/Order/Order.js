import React from "react";
import "./PackageStyle.css";
import { useState, useEffect } from "react";



function Order() {
  



  return (
    <div>
      <div className="main_container">
        <div className="item fw-bold">Add Order</div>
        <div className="item">
          <div className="row mt-5 ps-3">
            <div className="row">
              <div className=" col-lg-6 col-md-12 col-sm-12">
                <div className="row"></div>
              </div>
            </div>
          </div>
          <div className="row mt-5 px-3">
          <form>

              <div className="row mt-4">
                
                <div className="col">
                  <input
                    type="text"
                    value={package_name}
                    className="form-control"
                    placeholder="Package Name"
                    
                  />
                
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <select
                    name="type"
                    value={vehicle_type}
                    className="form-select"
                    aria-label="role" 
                   
                  >
                    <option selected disabled value="0" >
                      Vehicle Type
                    </option>
                    <option value="Car">Car</option>
                    <option value="Van">Van</option>
                    <option value="Mini Van">Mini van</option>
                    <option value="Tuk Tuk">Tuk Tuk</option>
                  </select>
                  <p class="alert-txt">{formErrors.vehicle_type}</p>
                </div>

                <div className="col">
                  <input
                    type="text"
                    value={contacts}
                    className="form-control"
                    placeholder="Contacts"
                   
                  />
                
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <input
                    type="text"
                    value={mpassengers}
                    className="form-control"
                    placeholder="Maximum Passengers"
                    
                  />
                 
                </div>
                <div className="col">
                  <input
                    type="text"
                    value={price}
                    className="form-control"
                    placeholder="Price"
                    
                  />
             
                </div>
                <div className="col">
                  <select
                    name="status"
                   
                    className="form-select"
                    aria-label="role"
                    
                  >
                    <option selected disabled value="0">
                      Status
                    </option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>
              </div>
              
              <div className="row mt-4">
                <div className="col">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      value={package_overview}
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Package Overview"
                     
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                    
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Additional Info"
                      
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="d-flex justify-content-around align-items-center">
                  <button
                    type="submit"
                    id="reg"
                    className="btn btnRegister "
                    onClick={handleSubmit}
                  >
                    Add Package
                  </button>
                  <button
                    type="button"
                    id="edit"
                    className="btn btnUpdate"
                    onClick={sendPackage}
                  >
                    Update
                  </button>
                  <button type="button" id="delete" className="btn btnDelete" onClick={deletePackage}>
                  Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Order;
