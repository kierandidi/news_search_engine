import { Outlet} from 'react-router-dom'
import NavbarExpand from '../components/Navbar';
import Footer from '../components/Footer';

const SharedLayout = ({allArticles, topics, searchFunction}) => {
  return (
    <>
      <NavbarExpand 
        allArticles={allArticles}
        topics={topics}
        searchFunction={searchFunction}
      />
      <Outlet/>
      <Footer /> 
    </>
  );
};
export default SharedLayout;