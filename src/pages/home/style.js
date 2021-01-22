import styled from 'styled-components';

export const HomeWrapper = styled.div `
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div `
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
`

export const HomeRight = styled.div `
    width: 280px;
    float: right;
`

export const TopicWrapper = styled.div `
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div `
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 5px;
    font-size: 14px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
`

export const ListItem = styled.div `
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 3px;
    }
`

export const ListInfo = styled.div `
    width: 500px;
    float: left;
    overflow: hidden;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 18px;
        font-size: 13px;
        color: #999;
    }
    div {
        float: left;
        margin-top: 20px;
    } 
    span {
        color: #b4b4b4;
        font-size: 10px;
        line-height: 15px;
        margin-right: 10px;
        .icon {
            font-size: 10px;
            &.heart {
                font-size: 15px;
            }
        }
        &.diamond {
            color: #ea6f5a;
        }
    }
`

export const RecommendWapper = styled.div `
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div `
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 10px;
`

export const ScanWrapper = styled.div `
    width: 280px;
    height: 55px;
    padding: 10px 22px;
    overflow: hidden;
    margin-bottom: 30px;
    img {
        display: block;
        float: left;
        width: 60px;
        height: 60px;
    }
`

export const ScanContent = styled.div `
    display: block;
    float: left;
    margin-top: 10px;
    margin-left: 20px;
    h2 {
        font-size: 15px;
        margin-bottom: 10px;
    }
    p {
        font-size: 13px;
        color: #999999;
    }
`

export const WritterWrapper = styled.div `
    width: 280px;
`

export const WritterHead = styled.div `
    font-size: 14px;
    color: #969696;
    overflow: hidden;
    text-align: right;
    margin-bottom: 10px;
`

export const WritterHeadItem = styled.span `
    &.right {
        display: block;
        float: left;
    }
    &.left {
        display: block;
        float: left;
    }
`
export const WritterList = styled.li `
    width: 280px;
    overflow: hidden;
    margin-bottom: 10px;
    img {
        display: block;
        float: left;
        height: 42px;
        width: 42px;
        margin-right: 15px;
        border-radius: 50%;
    }
    div {
        display: block;
        float: left;
        width: 150px;
        margin-top: 5px;
        h3 {
            font-size: 14px;
            margin-bottom: 5px;
        }
        p {
            font-size: 10px;
            color: #969696;
        }
    }
    .follow {
        float: right;
        display: block;
        margin-top: 15px;
        color: #48c02e;
        font-size: 13px;
    }
`

export const LoadMore = styled.div `
    width: 100%;
    margin: 30px 0;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`

export const BackTop = styled.div `
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50%;
    font-size: 14px;
    cursor: pointer;
`