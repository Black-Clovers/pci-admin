import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../pages/admin/dashboard/dashboard'
import Client from '../pages/admin/client/client';
import Career from '../pages/admin/CareerAdmin/addVacancy';
import ClientLayout from "../layout/clientLayout";
import AdminLayout from "../layout/adminLayout";
import Header from "../components/admin/common/header/Header";
import Sidebar from "../components/admin/common/sidebar/Sidebar";
import ClientHeader from "../components/client/common/header/ClientHeader";
import HomePage from "../pages/client/home/homePage";
import CareerList from "../pages/admin/CareerAdmin/CareerList";


const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/client/:path?' exact>
                        <div style={{"height": "auto"}}>
                            <ClientHeader/>
                            <ClientLayout>
                                <main>
                                    <Switch>
                                        <Route path="/client" render={(props) => <HomePage/>} exact/>;
                                    </Switch>
                                </main>
                            </ClientLayout>
                        </div>
                    </Route>

                    <Route path='/admin/:path?' exact>
                        <AdminLayout class="wrapper">
                            <Header/>
                            <Sidebar/>
                            <Switch>
                                <Route path="/admin" render={(props) => <Dashboard/>} exact/>;
                                <Route path="/admin/client" render={(props) => <Client/>}/>;
                                <Route path="/admin/career" render={(props) => <Career/>}/>;
                                <Route path="/admin/careerlist" render={(props) => <CareerList/>}/>;
                            </Switch>
                        </AdminLayout>
                    </Route>


                </Switch>
            </Router>
        </div>
    );
};
export default AppRoutes;
