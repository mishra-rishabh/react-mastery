import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
// import CreatePost from '../components/CreatePost';
// import PostList from '../components/PostList';
import PostListProvider from '../store/post-list-store';
import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className='appContainer'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>

        <div className='content'>
          <Header></Header>
          {/* {selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>} */}
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App;
