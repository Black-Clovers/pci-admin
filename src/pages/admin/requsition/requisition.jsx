import React, {useEffect, useState} from "react";
import "./requsition.css";
import Axios from "axios";

function Requisition() {
    const [orders, setOrders] = useState([]);
    const [orderID, setOrderID] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/pci-backend/v1/pci/admin/order/all/").then((response) => {
            setOrders(response.data);
        });
    }, []);

    const displayAllReq = () => {
        return orders.map((order) => {
            return (<tr itemScope="row" id={order.orderId} key={order.orderId}>
                <td>
                    {order.orderId}
                </td>
                <td>
                    {order.supplierName}
                </td>
                <td> {order.dates}</td>
                <td> {order.quantity}</td>
                <td> {order.deliveryAddress}</td>
                <td>
                    <i style={{"cursor": "pointer"}} className="fa-solid fa-square-check me-3 text-success d-inline"
                    />
                    <i style={{"cursor": "pointer"}}
                       className="fa-solid fa-circle-xmark d-inline me-2 text-danger d-inline"/>
                </td>
            </tr>)
        });
    };

    // const searchReq = () => {
    //     if (client_ID === null || client_ID === undefined || client_ID === "") {
    //         alert("Please insert the client ID");
    //     } else {
    //         axios.get(`http://localhost:8000/api/client/${client_ID}`).then((response) => {
    //             let searchedReq = [];
    //             searchedReq.push(response.data)
    //             setOrders(searchedReq);
    //         })
    //     }
    // };


    return (
        <div>
            <div className="main_container">
                <div className="item fw-bold">Requisition Management</div>
                <div className="item">
                    <div className="row mt-5 ps-3">
                        <div className="row">
                            <div className=" col-lg-6 col-md-12 col-sm-12">
                                <div className="row"></div>
                            </div>
                            <div className=" col-lg-3 col-md-5 col-sm-12">
                                <div className="row"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 px-3">
                        <h6 className="mb-0 fw-bold mt-2 mb-2">Current Requisition</h6>
                        {/*<div className="row mb-5">*/}
                        {/*    <div className="d-flex justify-content-end align-items-center">*/}
                        {/*        <div className="d-flex justify-content-center align-items-center">*/}
                        {/*            <input*/}
                        {/*                id="searchID"*/}
                        {/*                type="text"*/}
                        {/*                className="form-control col-8 me-5 px-5"*/}
                        {/*                placeholder="Requisition ID"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <input*/}
                        {/*                type="button"*/}
                        {/*                className="form-control btnSearch text-white" onChange={(e) => {*/}
                        {/*                setOrderID(e.target.value);*/}
                        {/*            }}*/}
                        {/*                value="Search"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="table-responsive">
                            <table
                                className="table table-striped custom-table"
                                id="assignLabsTable"
                            >
                                <thead>
                                <tr>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Supplier Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Delivery Address</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>

                                <tbody>
                                {
                                    displayAllReq()
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Requisition;
