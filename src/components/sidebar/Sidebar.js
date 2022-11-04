import React from 'react';
import './sidebar.css';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (<div className="sidebar">
        <ul className='ps-0'>
        <li><Link to="/admin/">
                <span className="icon"><i className="fa fa-tachometer"/></span>
                <span className="title">Dashbord</span>
            </Link></li>
            <li><Link to="/admin/supplier">
                <span className="icon"><i className="fa fa-tachometer"/></span>
                <span className="title">Suplier</span>
            </Link></li>
            <li><Link to="/admin/driver">
                <span className="icon"><i className="fa-solid fa-user-group"/></span>
                <span className="title">Order</span>
            </Link></li>
            <li><Link to="/admin/driver">
                <span className="icon"><i className="fa-solid fa-user-group"/></span>
                <span className="title">Deliveries</span>
            </Link></li>
            <li><Link to="/admin/driver">
                <span className="icon"><i className="fa-solid fa-user-group"/></span>
                <span className="title">Sites</span>
            </Link></li>
            
        </ul>
    </div>);
}

export default Sidebar;