import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import {
    HeadWrapper,
    Logo,
    Nav,
    NavItem,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
} from "./style";

class Header extends PureComponent {
    getListArea() {
        const {
            focused,
            list,
            page,
            totalPage,
            mouseIn,
            handleMouseEnter,
            handleMouseLeave,
            handlePageChange,
        } = this.props;
        const jsList = list.toJS();
        const pageList = [];

        if (jsList.length) {
            for (let i = page * 10; i < (page + 1) * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                );
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() =>
                                handlePageChange(page, totalPage, this.spinIcon)
                            }
                        >
                            <i
                                ref={(icon) => {
                                    this.spinIcon = icon;
                                }}
                                className='iconfont spin'
                            >
                                &#xe601;
                            </i>
                            换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>{pageList}</SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render() {
        const {
            focused,
            handleInputFocus,
            handleInputBlur,
            list,
            login,
            accountLogout,
        } = this.props;
        return (
            <HeadWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>
                        <i className='iconfont'>&#xe60c;</i>
                        首页
                    </NavItem>
                    <NavItem className='left'>
                        <i className='iconfont'>&#xe6d4;</i>
                        下载App
                    </NavItem>
                    {login ? (
                        <NavItem className='right' onClick={accountLogout}>
                            退出
                        </NavItem>
                    ) : (
                        <Link to='/login'>
                            <NavItem className='right'>登陆</NavItem>
                        </Link>
                    )}
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe600;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? "focused" : ""}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={
                                focused
                                    ? "focused iconfont zoom"
                                    : "iconfont zoom"
                            }
                        >
                            &#xe64a;
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writing'>
                            <i className='iconfont'>&#xe616;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeadWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(["header", "focused"]),
        list: state.getIn(["header", "list"]),
        page: state.getIn(["header", "page"]),
        totalPage: state.getIn(["header", "totalPage"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        login: state.getIn(["login", "login"]),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            list.size === 0 && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },

        handlePageChange(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
            if (page === totalPage) {
                dispatch(actionCreators.pageChange(0));
            } else if (page < totalPage) {
                dispatch(actionCreators.pageChange(page + 1));
            }
        },

        accountLogout() {
            dispatch(loginActionCreators.accountLogout());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
