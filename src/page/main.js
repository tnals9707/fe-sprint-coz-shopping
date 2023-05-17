import React from "react";
import styled from "styled-components";

const MainWrapper = styled.section`
`

const Maincontents = styled.ul`
    width: 179px;
    height: 38px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;

`

const Main = () => {
    return(
        <MainWrapper>
            <Maincontents>상품 리스트</Maincontents>
            <Maincontents>북마크 리스트</Maincontents>
        </MainWrapper>
    )
};

export default Main