import styled from "styled-components";

export const EssayWrapper = styled.div`
    position: absolute;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 300px;
`;

export const EssayComponent = styled.textarea`
    width: 100%;
    height: 80%;
    border: 2px solid #eee;
    border-radius: 3%;
    margin-top: 20px;
    padding: 10px 10px;
`;

export const SubmitEssay = styled.input`
    width: 40%;
    height: 15%;
    float: right;
    text-align: center;
    right: 0px;
`;
