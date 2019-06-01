import React from 'react';
import QueuesList from "./QueuesList";
import StudentAppBar from "./AppBar";

const WelcomeRoute = () => {
    return (
        <React.Fragment>
            <StudentAppBar/>
            <QueuesList/>
        </React.Fragment>
    );
};
export default WelcomeRoute;