import React from 'react';
import Dashboard from "./Dashboard";
import StudentAppBar from "./AppBar";

const DashboardRoute = () => {
    return (
        <React.Fragment>
            <StudentAppBar/>
            <Dashboard/>
        </React.Fragment>
    );
};

export default DashboardRoute;