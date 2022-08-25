import { Outlet} from 'react-router-dom'
import NavbarExpand from '../components/Navbar';
import Footer from '../components/Footer';

const SharedLayout = () => {
  return (
    <>
      <NavbarExpand />
      <Outlet/>
      <Footer /> 
    </>
  );
};
export default SharedLayout;