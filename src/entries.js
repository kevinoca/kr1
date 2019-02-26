import React from "react";
import View1 from "./views/view1";
import View2 from "./views/view2";
import Home from "./views/home"

export const Entries = () => {

    const Entries = new Map()

    //* To add a new Element/view is necessary to set a title and it's component and import it previously at the top of this file.

    Entries.set("Home", <Home />)
    Entries.set("Vista 1", <View1 />)
    Entries.set("Vista 2", <View2 />)

    return Entries

}