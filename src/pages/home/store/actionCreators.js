import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articalList: result.articalList,
    recommendList: result.recommendList,
    writterList: result.writterList
})

const addHomeList = (result, nextPage) => ({
    type: constants.ADD_ARTICAL_LIST,
    list: fromJS(result),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_TOP_SHOW,
    show
})