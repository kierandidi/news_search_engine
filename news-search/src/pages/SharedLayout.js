import { Outlet} from 'react-router-dom'
import NavbarExpand from '../components/Navbar';
import Footer from '../components/Footer';

const SharedLayout = ({topics, allArticles}) => {
  return (
    <>
      <NavbarExpand 
        allArticles={allArticles}
        topics={topics}
      />
      <Outlet/>
      <Footer /> 
    </>
  );
};
export default SharedLayout;