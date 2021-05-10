import React from 'react'
import Navbar from './NavComponents/Navbar';
import { Switch,Route, Redirect} from 'react-router-dom'
import Home from './NavComponents/Home'
import Contact from './NavComponents/Contact'
import About from './NavComponents/About'
import Service from './NavComponents/Service'
import Footer from './Footer'
function App() {
  return (
   <>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/service" component={Service}/>
       <Route path="/contact" component={Contact}/>
       <Redirect to="/"/>
     </Switch>
     <Footer/>
   </>
  );
}

export default App;
