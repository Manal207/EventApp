import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import VideoFeed from './Components/VideoFeed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<VideoFeed/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

