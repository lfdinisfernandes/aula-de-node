import React  from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { cadastrar } from "./pages/cadastrar";

import {Dashboard} from './pages/dashboard';
import {Listar} from './pages/liste';
import {viasualizar} from './pages/visualizar';
import {Cadastrar} from './pages/Cadastrar';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component= {Dashboard}/> 
          <Route exact path="/listar" component= {Listar}/>
          <Route exact path="/viasualizar" component= {viasualizar}/>
          <Route exact path="/Cadastrar" component= {Cadastrar}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
