
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Error from './Shared/Error'
import Home from './Home/pages/Home';
import Maestro from './Ventas/pages/Maestro';
import Registro from './Ventas/pages/Registro';
import Header from "./Shared/Header"

const App = () => {


  return (
    <div>
      <Router>
        <Header />
        <Switch>
          
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/registro_de_ventas" exact> 
            <Registro/>
          </Route>
          <Route path="/maestro_de_ventas" exact> 
            <Maestro/>
          </Route>
          <Route path="/Error" exact> 
            <Error/>
          </Route>
          <Redirect to="/Error" /> 

        </Switch>

      </Router>

      
    </div>
    
  );
}

export default App;
