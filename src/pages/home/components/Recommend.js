import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
    render() {
        const { list } = this.props; 
        return ( 
            <RecommendWapper>
                {list.map((item) => {
                    return(
                        <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    )
                })}
            </RecommendWapper>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
});

export default connect(mapState)(Recommend);