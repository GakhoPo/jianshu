import React, { PureComponent } from "react";
import { connect } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writter from "./components/Writter";
import Scan from "./components/Scan";
import { actionCreators } from "./store";
import { BackTop } from "./style";

import { HomeWrapper, HomeLeft, HomeRight } from "./style";

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Scan></Scan>
                    <Writter></Writter>
                </HomeRight>
                {this.props.showScroll ? (
                    <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
                ) : null}
            </HomeWrapper>
        );
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener("scroll", this.props.changeScrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },

    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    },
});

export default connect(mapState, mapDispatch)(Home);
