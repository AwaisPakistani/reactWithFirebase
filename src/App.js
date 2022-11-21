import React, {lazy, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { Button, Badge } from 'react-bootstrap';
import Base from './components/base/base.component';
const Home=lazy(()=> import('./pages/home/home.component'));
const About=lazy(()=> import('./pages/about/about.component'));
const Authentication=lazy(()=> import('./pages/authentication/authentication.component'));
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
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/authentication' element={<Authentication />} />
        </Routes>
      </Suspense>
      </Router>
        
           
           
        
     </div>
    );
  }
}
export default App;

