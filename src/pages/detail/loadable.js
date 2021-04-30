import Loadable from "react-loadable";
import React from "react";

const LoadableComponent = Loadable({
    loader: () => import("./"),
    loading() {
        return <div>Loading...</div>;
    },
    delay: 200,
});

const LoadableFunction = () => <LoadableComponent />;

export default LoadableFunction;
