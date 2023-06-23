
import './App.css';
import AddBlog from './components/AddBlog';
import AllBlogs from './components/AllBlogs';
import NavBar from './components/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditBlog from './components/EditBlog';
import ViewBlog from './components/ViewBlog';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/add' element={<AddBlog/>}/>
        <Route path='/all' element={<AllBlogs/>}/>
        <Route path='/edit/:id' element={<EditBlog/>}/>
        <Route path='/view/:id' element={<ViewBlog/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
