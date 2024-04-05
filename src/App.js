import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Homepage from './pages/Home';
import EditPage from './pages/Edit';
import './App.css';


function App() {
  return (
   <div className='App'>
    <Header/>
    <Routes>
      <Route path='/' element ={<Homepage/>} />
      <Route path='/edit' element ={<EditPage/>} />
    </Routes>
   </div>
  );
}

export default App;
