import React, {lazy, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Base from './components/base/base.component';

const Home=lazy(()=> import('./pages/home/home.component'));
const About=lazy(()=> import('./pages/about/about.component'));
const Authentication=lazy(()=> import('./pages/authentication/authentication.component'));
const AddUsers=lazy(()=> import('././pages/crudpages/add.component'));
const EditCrud=lazy(()=> import('./components/editcrud/editcrud.component'));

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
     <div className='App'>
      <Router>
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/addcrud' element={<AddUsers />} />
                <Route path='/upateuser/id' element={<EditCrud />} />
                <Route path='/authentication' element={<Authentication />} />
            </Routes>
          </Suspense>
      </Router>
        
           
           
        
     </div>
    );
  }
}
export default App;

