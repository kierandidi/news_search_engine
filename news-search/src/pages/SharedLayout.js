import { Outlet} from 'react-router-dom'
import NavbarExpand from '../components/Navbar';

const SharedLayout = () => {
  return (
    <>
      <NavbarExpand />
      <Outlet/>
    </>
  );
};
export default SharedLayout;