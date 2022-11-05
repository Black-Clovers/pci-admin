import React from "react";
import "./order.css";
import { useState} from "react";
import Axios from "axios";



function Order() {
  

  const [orderId, setorderId] = useState("");
  const [companyName, setcompany_name] = useState("");
  const [supplierName, setsuppliername] = useState("");
  const [deliveryAddress, setdeliveryAddress] = useState("");
  const [referenceNumber, setrefence] = useState("");
  const [dates, setdates] = useState("");
  const [quantity, setquantity] = useState("");
  const [descriptionAgreedPrice, setdescriptionAgreedPrice] = useState("");
  const [listOfpackage, setlistOfpackage] = useState([]);

  const createorder = () => {
    Axios.post("http://localhost/pci-backend/v1/pci/admin/order/create/", {
      orderId,
      companyName,
      supplierName,
      deliveryAddress,
      referenceNumber,
      dates,
      quantity,
      descriptionAgreedPrice,


    }).then((response) => {
      setlistOfpackage([
        ...listOfpackage,
        {

          orderId,
          companyName,
          supplierName,
          deliveryAddress,
          referenceNumber,
          dates,
          quantity,
          descriptionAgreedPrice,
        },
      ]);
    });
  };

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
                    onChange={(event) => {
                      setcompany_name(event.target.value);
                    }}
                   
                    className="form-control"
                    placeholder="Company Name"
                    
                  />
                
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                <div className="col">
                  <input
                    type="text"
                    onChange={(event) => {
                      setsuppliername(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Supplier Name"
                    
                  />
                
                </div>
                
                </div>

                <div className="col">
                  <input
                    type="text"
                    onChange={(event) => {
                      setrefence(event.target.value);
                    }}
                   
                    className="form-control"
                    placeholder="Reffernece Number"
                   
                  />
                
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <input
                    type="text"
                    onChange={(event) => {
                      setquantity(event.target.value);
                    }}
                   
                    className="form-control"
                    placeholder="Quantity"
                    
                  />
                 
                </div>
                <div className="col">
                  <input
                    type="text"
                    onChange={(event) => {
                      setdescriptionAgreedPrice(event.target.value);
                    }}
                    className="form-control"
                    placeholder="Price"
                    
                  />
             
                </div>
                <div className="col">
                <input name="dateOfBirth"
                                           className="form-control"
                                           placeholder="Required date"
                                           type="text"
                                          
                                           onFocus={(e) => e.target.type = 'date'} id="dateOfBirth" onChange={(e) => {
                                            setdates(e.target.value)
                                    }}/>
                            
                </div>
              </div>
              
              <div className="row mt-4">
                <div className="col">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                     
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Delivery Address"
                      onChange={(event) => {
                        setdeliveryAddress(event.target.value);
                      }}
                     
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
                    onClick={createorder}
                  >
                    Add Package
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
