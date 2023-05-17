import React, { useState } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    padding: 0 76px 0 76px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    display: flex;
    align-items: center; 

    > img {
        margin-right: 12px;
    }
    > h1 {
        font-size: 32px;
        height: 700;
    }
    > h1:hover {
        cursor: pointer;
    }
`;

const Hamburger = styled.img`
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

const Nav = styled.ul`
    display: flex;
    flex-direction: column;
`;

const List = styled.li`
    height: 50px;
    size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;

    > img {
        margin-right: 8px;
    }
`;

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandler = () => {
    setModalOpen(!modalOpen);
    };

    return (
    <Container>
        <Logo>
            <img src='icon/logo.png' alt='logoIcon'></img>
            <h1> COZ Shopping</h1>
        </Logo>
        <Hamburger 
            src='icon/hamburger.png'
            onClick={modalHandler} 
        />
        <Modal
            isOpen = {modalOpen}
            onRequestClose={modalHandler}
            style={modalStyle}>
                <Nav>
                    <List>  ⃝ ⃝ ⃝님, 안녕하세요! </List>
                    <List>
                        <Link to='/itemList'>
                        <img src='icon/itemlist.png' alt='itemIcon' />상품리스트 페이지
                        </Link>
                    </List>
                    <List>
                        <Link to='/bookmark'>
                        <img src='icon/bookmark.png' alt='bookmarkIcon'></img>
                        북마크 페이지
                        </Link>
                    </List>
                </Nav>
        </Modal>
    </Container>
    );
};

export default Header;