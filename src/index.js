import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = ()=>(<div>Página 404</div>)
ReactDOM.render(
  <BrowserRouter>
    <Switch> {/*Ordem de prioridade, o que aparecer primeiro ele roteia, porém com exact ele é mais exigente em rotear exatamente o path*/}
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />{/*()=>(<div>Página 404</div>) Similar ao lambda do Java*/} {/* Por fim, a rota padrão, o default do switch*/}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

