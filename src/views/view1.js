import React, { Component } from "react";

export default class View1 extends Component {

    constructor(props) {
        super(props)
        this.title = "Vista 1"
    }

    render() {

        return (

            <div id="View1" className="component">

                <h2>This is the {this.title} component</h2>

            </div>

        )

    }

}