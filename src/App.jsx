// eslint-disable-next-line no-unused-vars
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';


export default function App() {
  return <BrowserRouter > 
  <Routes>

<Route path="/" element = {<Home/>} />
<Route path="/sign-in" element = {<SignIn/>} />
<Route path="/sign-up" element = {<SignUp/>} />
<Route path="/Profile" element = {<Profile/>} />
<Route path="/about" element = {<About/>} />

  </Routes>
  
  </BrowserRouter>

}