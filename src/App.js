import "./App.css";
import { Route, Switch } from "react-router-dom";
import Root from "./Root";
import MainPage from "./pages/MainPage";
import WelcomeScreen from "./components/WelcomeScreen";
import MainInfoScreen from "./components/MainInfoScreen";
import LoginScreen from "./components/LoginScreen";
import Header from "./components/Header";

const Routes = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <Route path="/" exact component={MainPage} />
        {/* <Route path="/welcome" exact component={WelcomeScreen} />
        <Route path="/home" exact component={MainInfoScreen} />
        <Route path="/login" exact component={LoginScreen} /> */}
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
