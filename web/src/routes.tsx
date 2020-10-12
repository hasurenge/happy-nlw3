import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Map from "./pages/Map";

export default (): JSX.Element => {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/map" component={Map} />
        </BrowserRouter>
    );
};
