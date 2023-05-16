import styled from "styled-components";

const FooterSection = styled.footer`
    position: fixed;
    width: 1280px;
    height: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

`

const Contents = styled.p`
    color: rgba(136, 136, 136, 1)
    size: 12px;
    height: 18px;
    margin: 0;
    
`

const Footer = () => {
    return(
        <FooterSection>
            <Contents>개인정보 처리방침 | 이용약관</Contents>
            <Contents>All rights reserved @ CodeStates</Contents>
        </FooterSection>
    );

}

export default Footer