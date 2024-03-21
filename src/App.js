import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import VideoFeed from './Components/VideoFeed';
import PhoneNumberForm from './Components/PhoneNumberForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<VideoFeed/>}/>
        <Route path='/phone' element={<PhoneNumberForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

