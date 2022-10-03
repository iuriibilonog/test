import './App.css';
import { Route, Switch } from 'react-router-dom';
import Root from './Root';
import MainPage from './pages/MainPage';

const Routes = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
};

const App = () => (
  <Root>
    <Routes />
  </Root>
);

export default App;
