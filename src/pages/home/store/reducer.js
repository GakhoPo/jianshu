import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultStore = fromJS({
    topicList: [],
    articalList: [],
    recommendList: [],
    writterList: [],
    articalPage: 1,
    showScroll: false
});

const reducer = (state = defaultStore, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articalList: fromJS(action.articalList),
                recommendList: fromJS(action.recommendList),
                writterList: fromJS(action.writterList)
            });
        case constants.ADD_ARTICAL_LIST:
            return state.merge({
                articalList: state.get('articalList').concat(action.list),
                articalPage: fromJS(action.nextPage)
            });
        case constants.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.show);
        default:
            return state;
    };
};

export default reducer;