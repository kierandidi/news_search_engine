import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarExpand from './components/Navbar'
import {articles} from './Articles';
import CardList from './components/CardList';

function App() {
  return (
    <div className=''>
      <NavbarExpand />
      <CardList className='' articles = {articles}/>
    </div>
  );
}

export default App;
