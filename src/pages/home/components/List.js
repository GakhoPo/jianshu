import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() { 
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {list.map((item) => {
                    return(
                        <Link key={item.get('id')} to={'/detail/' + item.get('id')}>
                            <ListItem>
                                <img className='pic' src={item.get('imgUrl')} alt='null'/>
                                <ListInfo>
                                    <h1 className='title'>{item.get('title')}</h1>
                                    <p className='desc'>{item.get('desc')}</p>
                                    <div>
                                        <span className='diamond'>
                                            <i className='iconfont'>&#xe603;</i>
                                            {item.get('diamond')}
                                        </span> 
                                        <span>{item.get('writter')}</span> 
                                        <span>
                                            <i className='iconfont icon'>&#xe602;</i>
                                            {item.get('comment')}
                                        </span> 
                                        <span>
                                            <i className='iconfont icon heart'>&#xe605;</i>
                                            {item.get('like')}
                                        </span> 
                                        <span>
                                            <i className='iconfont icon'>&#xe690;</i>
                                            {item.get('shang')}
                                        </span>
                                    </div>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })}
                <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
            </div> 
            
         );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articalList']),
    page: state.getIn(['home', 'articalPage'])
});

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page));
    }
})

export default connect(mapState, mapDispatch)(List);