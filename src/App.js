import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login/loadable";
import Write from "./pages/write/loadable";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/write' exact component={Write}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
