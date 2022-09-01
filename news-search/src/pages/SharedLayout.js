import { Outlet} from 'react-router-dom'
import NavbarExpand from '../components/Navbar';
import Footer from '../components/Footer';

const SharedLayout = ({changeTopicBitcoin, changeTopicAbortion, changeTopicInflation,changeTopicGlobalWarming, allTopics}) => {
  return (
    <>
      <NavbarExpand 
        allTopics={allTopics}
        changeTopicBitcoin={changeTopicBitcoin}
        changeTopicAbortion={changeTopicAbortion}
        changeTopicInflation={changeTopicInflation}
        changeTopicGlobalWarming={changeTopicGlobalWarming}
      />
      <Outlet/>
      <Footer /> 
    </>
  );
};
export default SharedLayout;