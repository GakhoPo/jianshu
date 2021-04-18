import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { EssayWrapper } from "./style";

class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;

        if (loginStatus) {
            return (
                <EssayWrapper placeholder='Write your essay here!'></EssayWrapper>
            );
        } else {
            return <Redirect to='/login' />;
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(["login", "login"]),
});

export default connect(mapState, null)(Write);
