import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Exercises from './components/Exercises';
import { Provider } from "react-redux";
import { store } from './store';

const App = () => {
  return (
    <Provider  store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/exercises" component={Exercises} />
      </Switch>
    </Router>
    </Provider>
  );
};

export default App;