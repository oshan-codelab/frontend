import React from "react";

import HeaderBar from "./components/HeaderBar";
import Form from "./components/Form/Form";
import Report from "./components/Report/Report";
import Rtable from "./components/Rtable/Rtable";
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Footer from "./components/Footer";
import {Link} from 'react-router-dom';




function App() {
  return (

    <div>
     
      <BrowserRouter>
      <HeaderBar />
      <Switch>

      
      
      <Route path="/Report">
      <Report />
      </Route>
      
     

      <Route path="/Rtable">
      <Rtable /> 
      </Route>  

      <Route path="/">
      <Form />
      </Route>


      </Switch>
      </BrowserRouter>
     
     <Footer />
    
      

    </div>
  );
}

export default App;