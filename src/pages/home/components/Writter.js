import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WritterWrapper, WritterHead, WritterHeadItem, WritterList } from '../style';
class Writter extends PureComponent {
    render() {
        const { list } = this.props; 
        return ( 
            <WritterWrapper>
                <WritterHead>
                    <WritterHeadItem classNmae= 'left'>
                        <i className='iconfont'>&#xe601;</i>
                        换一批
                    </WritterHeadItem>
                    <WritterHeadItem className='right'>推荐作者</WritterHeadItem>
                </WritterHead>
                <ul>
                    {list.map((item) => {
                        return(
                            <WritterList key={item.get('id')}>
                                <img src={item.get('imgUrl')} alt=' '/>
                                <div>
                                    <h3>{item.get('writter')}</h3>
                                    <p>写了{item.get('number')}字· {item.get('like')}喜欢</p>
                                </div>
                                <p className='follow'>+关注</p>
                            </WritterList>
                        )
                    })}
                </ul>
            </WritterWrapper>
         );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writterList'])
})

export default connect(mapState, null)(Writter);