import { Outlet } from 'react-router-dom'
import NavbarExpand from '../components/Navbar';
import Footer from '../components/Footer';

const SharedLayout = ({ getAllArticles, topics, onSearch, changeTopic }) => {
  return (
    <>
      <NavbarExpand
        getAllArticles={getAllArticles}
        topics={topics}
        onSearch={onSearch}
        changeTopic={changeTopic}
      />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;