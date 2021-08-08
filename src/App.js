import React  from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import { cadastrar } from "./pages/cadastrar";

import {Dashboard} from './pages/dashboard';
import {Listar} from './pages/liste';
import {Visualizar} from './pages/visualizar';
import {Cadastrar} from './pages/Cadastrar';
import {Editar} from './pages/Editar';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component= {Dashboard}/> 
          <Route exact path="/listar" component= {Listar}/>
          <Route exact path="/Visualizar" component= {Visualizar}/>
          <Route exact path="/Cadastrar" component= {Cadastrar}/>
          <Route exact path="/editar" component= {Editar}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
