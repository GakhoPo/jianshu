import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { LoginWrapper, LoginBox, Input, Button } from "./style";

class Login extends PureComponent {
    render() {
        const { loginStatus, loginForm } = this.props;

        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input
                            placeholder='账户'
                            ref={(input) => {
                                this.account = input;
                            }}
                            required
                        />
                        <Input
                            placeholder='密码'
                            type='password'
                            ref={(input) => {
                                this.password = input;
                            }}
                            required
                        />
                        <Button
                            onClick={() =>
                                loginForm(this.account, this.password)
                            }
                        >
                            登陆
                        </Button>
                    </LoginBox>
                </LoginWrapper>
            );
        } else {
            return <Redirect to='/' />;
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(["login", "login"]),
});

const mapDispatch = (dispatch) => ({
    loginForm(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    },
});

export default connect(mapState, mapDispatch)(Login);
