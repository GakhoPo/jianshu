import Loadable from "react-loadable";
import React from "react";
import myloader from "../../myloader";

const LoadableComponent = Loadable({
    loader: () => import("./"),
    loading: myloader,
});

const LoadableFunction = () => <LoadableComponent />;

export default LoadableFunction;
