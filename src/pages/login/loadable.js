import React from "react";
import Loadable from "react-loadable";
import myloader from "../../myloader";

const LoadableComponent = Loadable({
    loader: () => import("./"),
    loading: myloader,
});

const LoadableFunction = () => <LoadableComponent />;

export default LoadableFunction;
