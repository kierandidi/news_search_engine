import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import NavbarExpand from './components/Navbar'
import Home from './pages/Home';
import SharedLayout from './pages/SharedLayout';
import Abortion from './pages/Abortion';
import Bitcoin from './pages/Bitcoin';
import GlobalWarming from './pages/GlobalWarming';
import Inflation from './pages/Inflation'
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path='abortion' element={<Abortion/>} />
          <Route path='bitcoin' element={<Bitcoin/>} />
          <Route path='global-warming' element={<GlobalWarming/>} />
          <Route path='inflation' element={<Inflation/>} />
          <Route path='*' element={<Error />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
