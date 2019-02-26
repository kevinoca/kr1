import React from "react";

export const Dashboard = props => {

    const Component = props.component || /*<div>This is the Dashboard</div>*/ ""

    return (

        <div id="Dashboard" className="component">

            {Component}

        </div>

    )

}