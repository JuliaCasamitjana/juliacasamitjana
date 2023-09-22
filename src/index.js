import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/styles.scss';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import LanguageSkills from './components/LanguageSkills';
import ComputerSkills from './components/ComputerSkills';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import NotFound from './components/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/portfolio/" component={Portfolio}/>
          <Route path="/education/" component={Education}/>
          <Route path="/experience/" component={Experience}/>
          <Route path="/languageskills/" component={LanguageSkills}/>
          <Route path="/computerskills/" component={ComputerSkills}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

