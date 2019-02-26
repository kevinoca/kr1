import React, { Component } from "react";

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.title = "Home"
    }

    render() {

        return (

            <div id="Home" className="component">

                <h2>This is the {this.title} component</h2>
                <h3>Also, this view has been selected as default when the app launch</h3>

            </div>

        )

    }

}