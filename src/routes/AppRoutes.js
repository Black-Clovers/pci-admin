import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "../components/header/Header";
import ClientLayout from "../layout/ClientLayout";
import AdminLayout from "../layout/Adminlayout";
import Sidebar from "../components/sidebar/Sidebar";
import SuplierManagemenet from "../pages/SuplierManagement";

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    
                    <Route path='/home/:path?' exact>
                        <div style={{"height": "auto"}}>
                           
                            <ClientLayout>
                                <main>
                                    <Switch>
                                        
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


                            <Route path="/supplier" render={(props) => <SuplierManagemenet/>} exact/>;
                               
                                

                            </Switch>
                        </AdminLayout>
                    </Route>


                </Switch>
            </Router>
        </div>
    );
};
export default AppRoutes;