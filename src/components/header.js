import React, { useState } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';


const HeaderSection = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 76px 0 76px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
`;

const ImgLogo = styled.img `
    height: 30px;
    width: 55px;
    margin-right: 12px;
    margin-top: 25px;
`;

const Title = styled.h1 `
    font-size: 32px;
    height: 700;

    > Title : hover{
        cursor: pointer;
    }
`;

const Hamburger = styled.img`
display: flex;
    cursor: pointer;
`;

const modalStyle = {
    content: {
        top: '200px',
        left: 'auto',
        right: '25px',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.1)'
      }
};

const ModalInner = styled.ul`
    display: flex;
    flex-direction: column;
`;

const List = styled.li`
    height: 50px;
    size: 16px;
    display: flex;
    align-items: center;
`

const ImgPng = styled.img `
        margin-right: 8px;
`;

const LinkStyle = {
    textDecoration: "none",
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
}

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandler = () => {
    setModalOpen(!modalOpen);
    };

    return (
    <HeaderSection>
        <Logo>
            <Link to='/' style={LinkStyle}>
            <ImgLogo src='icon/logo.png' alt='logoIcon' />
            <Title>COZ Shopping</Title>
            </ Link>
        </Logo>
        <Hamburger 
            src='icon/hamburger.png'
            onClick={modalHandler} 
        />
        <Modal
            isOpen = {modalOpen}
            onRequestClose={modalHandler}
            style={modalStyle}>
                <ModalInner>
                    <List>  ⃝ ⃝ ⃝님, 안녕하세요! </List>
                    <List>
                        <Link to='/itemList' style={LinkStyle}>
                        <ImgPng src='icon/itemlist.png' alt='itemIcon' />상품리스트 페이지
                        </Link>
                    </List>
                    <List>
                        <Link to='/bookmark' style={LinkStyle}>
                        <ImgPng src='icon/bookmark.png' alt='bookmarkIcon' />
                        북마크 페이지
                        </Link>
                    </List>
                </ModalInner>
        </Modal>
    </HeaderSection>
    );
};

export default Header;