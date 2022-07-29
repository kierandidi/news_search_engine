import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarExpand from './components/Navbar'
import {articles} from './Articles';
import CardList from './components/CardList';
// import Bitcoin from './components/bitcoin'

function App() {
  return (
    <div className=''>
      <NavbarExpand />
      {/* <Bitcoin className='' /> */}
      <CardList className='' articles = {articles}/>
    </div>
  );
}

export default App;
