import React, { Component } from "react";

export default class View2 extends Component {

    constructor(props) {
        super(props)
        this.title = "Vista 2"
    }

    render() {

        return (

            <div id="View2" className="component">

                <h2>This is the {this.title} component</h2>

            </div>

        )

    }

}