
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Page1 from './components/First/Page1';
import MainPage from './components/pages/View/MainPage';
import Content from './components/content/Content';
import Service from './components/content-2/Service';
import About from './components/about/About';
import SerTarget from './components/services/SerTarget';
import Emergancy from './components/Emergancy/Emergancy';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import MainNav from './components/navbar/MainNav';
import AdmNav from './components/navbar/AdmNav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Residential from './components/Residential/Residential';
import Comertial from './components/comertial/Comertial';
import EmargancyPlumbing from './components/Emargancy/EmargancyPlumbing';
function App() {
  return (
<>
<BrowserRouter>

<Routes>
<Route path='/' element={<MainPage/>}/>
  <Route path='/navbar' element={<Navbar/>}/>
  <Route path='/page1' element={<Page1/>}/>
  <Route path='/content' element={<Content/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/sertarget' element={<SerTarget/>}/>
  <Route path='/emergancy' element={<Emergancy/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/footer' element={<Footer/>}/>
  <Route path='/Mainnav' element={<MainNav/>}/>
  <Route path='/admnav' element={<AdmNav/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/resident' element={<Residential/>}/>
  <Route path='/comertial' element={<Comertial/>}/>
  <Route path='/emer' element={<EmargancyPlumbing/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
