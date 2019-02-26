import React from "react";

export const Sidebar = props => {

    const menu = props.components
    const componentSelected = props.componentSelected || null

    return (

        <div id="sidebar">

            {componentSelected}

            <ul>
                {/* menuOptions
                <hr /> */}
                {menu}
            </ul>

        </div>

    )

}