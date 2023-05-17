import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import Main from './page/main';
import ItemList from './page/itemlist'
import BookMark from './page/bookmark'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/itemList' element={<ItemList />} />
        <Route path='/bookmark' element={<BookMark />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;