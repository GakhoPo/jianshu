import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { EssayWrapper, EssayComponent, SubmitEssay } from "./style";

class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;

        if (loginStatus) {
            return (
                <EssayWrapper>
                    <EssayComponent placeholder='Write your essay here!'></EssayComponent>
                    <SubmitEssay type='submit' value='Submit your essay!' />
                </EssayWrapper>
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
